# Portfólio pessoal

Base técnica do portfólio em React, Vite e TypeScript. O layout e o conteúdo definitivo serão implementados após a análise do Figma.

## Requisitos

- Node.js 24 (ou versão compatível com o Vite instalado)
- npm

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

No PowerShell com execução de scripts bloqueada, use `npm.cmd` no lugar de `npm`.

Se o npm não reconhecer a cadeia de certificados do Windows, execute `$env:NODE_USE_SYSTEM_CA = '1'` na sessão do PowerShell antes de `npm.cmd install`. Não desative a verificação TLS.

## Organização

- `src/pages`: páginas e rotas.
- `src/i18n`: configuração e arquivos JSON de `pt-BR` e `en`.
- `src/styles`: reset, estilos globais e tokens futuros.
- `src/components`, `src/sections`, `src/hooks`, `src/types` e `src/assets`: diretórios reservados para implementações reais nas próximas etapas.

O idioma inicial e fallback são `pt-BR`. O idioma escolhido é salvo em `localStorage` sob `portfolio.language`; mudanças atualizam `html[lang]`. O React Router está preparado com a rota inicial `/`.

GSAP, `@gsap/react` e ScrollTrigger são registrados em `src/animations/gsap.ts`. As regras de animação estão em [AGENTS.md](AGENTS.md); nenhuma animação foi criada nesta etapa.
