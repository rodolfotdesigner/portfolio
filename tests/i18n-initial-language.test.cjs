const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const { createRequire } = require('node:module')
const { join } = require('node:path')
const test = require('node:test')
const { runInNewContext } = require('node:vm')
const ts = require('typescript')

const sourcePath = join(__dirname, '../src/i18n/index.ts')
const sourceRequire = createRequire(sourcePath)
const source = readFileSync(sourcePath, 'utf8')
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText

function initialize({ saved = null, languages, language, storageAvailable = true }) {
  let stored = saved
  const writes = []
  const storage = {
    getItem() {
      if (!storageAvailable) throw new Error('Storage unavailable')
      return stored
    },
    setItem(key, value) {
      if (!storageAvailable) throw new Error('Storage unavailable')
      writes.push([key, value])
      stored = value
    },
  }
  const document = { documentElement: { lang: 'pt-BR' } }
  const instance = sourceRequire('i18next').createInstance()
  const module = { exports: {} }
  const requireFromSource = (id) => (id === 'i18next' ? instance : sourceRequire(id))

  runInNewContext(compiled, {
    module,
    exports: module.exports,
    require: requireFromSource,
    window: { localStorage: storage },
    navigator: { languages, language },
    document,
  }, { filename: sourcePath })

  return {
    i18n: module.exports.default,
    document,
    writes,
    getStored: () => stored,
  }
}

test('initial language follows saved preference, then the first browser preference', () => {
  const cases = [
    { languages: ['pt-BR'], language: 'en-US', expected: 'pt-BR' },
    { languages: ['pt-PT'], language: 'en-US', expected: 'pt-BR' },
    { languages: ['en-US'], language: 'pt-BR', expected: 'en' },
    { languages: ['es-ES'], language: 'pt-BR', expected: 'en' },
    { languages: ['es-ES', 'pt-BR'], language: 'pt-BR', expected: 'en' },
    { languages: ['pt-PT', 'en-US'], language: 'en-US', expected: 'pt-BR' },
    { languages: [], language: 'pt-PT', expected: 'pt-BR' },
    { languages: [], language: '', expected: 'en' },
    { saved: 'pt-BR', languages: ['en-US'], language: 'en-US', expected: 'pt-BR' },
    { saved: 'en', languages: ['pt-BR'], language: 'pt-BR', expected: 'en' },
    { saved: 'invalid', languages: ['pt-BR'], language: 'pt-BR', expected: 'pt-BR' },
  ]

  for (const scenario of cases) {
    const app = initialize(scenario)
    assert.equal(app.i18n.resolvedLanguage, scenario.expected)
    assert.equal(app.document.documentElement.lang, scenario.expected)
    assert.deepEqual(app.writes, [], 'initial detection must not write storage')
  }
})

test('manual change is persisted and restored after reload', async () => {
  const app = initialize({ languages: ['en-US'], language: 'en-US' })
  await app.i18n.changeLanguage('pt-BR')

  assert.equal(app.i18n.resolvedLanguage, 'pt-BR')
  assert.equal(app.document.documentElement.lang, 'pt-BR')
  assert.deepEqual(app.writes, [['portfolio.language', 'pt-BR']])

  const reloaded = initialize({ saved: app.getStored(), languages: ['en-US'], language: 'en-US' })
  assert.equal(reloaded.i18n.resolvedLanguage, 'pt-BR')
  assert.equal(reloaded.document.documentElement.lang, 'pt-BR')
  assert.deepEqual(reloaded.writes, [])
})

test('unavailable storage does not interrupt detection or manual changes', async () => {
  const app = initialize({ languages: ['pt-PT'], language: 'pt-PT', storageAvailable: false })
  assert.equal(app.i18n.resolvedLanguage, 'pt-BR')
  assert.equal(app.document.documentElement.lang, 'pt-BR')

  await app.i18n.changeLanguage('en')
  assert.equal(app.i18n.resolvedLanguage, 'en')
  assert.equal(app.document.documentElement.lang, 'en')
})
