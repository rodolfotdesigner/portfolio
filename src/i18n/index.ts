import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './locales/pt/translation.json'
import en from './locales/en/translation.json'

const storageKey = 'portfolio.language'
const supportedLanguages = ['pt-BR', 'en'] as const
type SupportedLanguage = (typeof supportedLanguages)[number]

function getInitialLanguage(): SupportedLanguage {
  try {
    const saved = window.localStorage.getItem(storageKey)
    if (supportedLanguages.some((language) => language === saved)) {
      return saved as SupportedLanguage
    }
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }

  const preferredLanguage = navigator.languages?.find((language) => language.trim()) ?? navigator.language
  const baseLanguage = preferredLanguage?.trim().split(/[-_]/, 1)[0]?.toLowerCase()

  return baseLanguage === 'pt' ? 'pt-BR' : 'en'
}

const initialLanguage = getInitialLanguage()

void i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': { translation: pt },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: 'pt-BR',
  supportedLngs: [...supportedLanguages],
  interpolation: { escapeValue: false },
})

let hasChangedLanguage = false

function syncLanguage(language: string) {
  document.documentElement.lang = language

  if (language !== initialLanguage) {
    hasChangedLanguage = true
  }

  if (!hasChangedLanguage) {
    return
  }

  try {
    window.localStorage.setItem(storageKey, language)
  } catch {
    // The app remains usable when storage is unavailable.
  }
}

i18n.on('languageChanged', syncLanguage)
syncLanguage(i18n.language)

export default i18n
