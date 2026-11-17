# Instruções permanentes do projeto

## Escopo e stack

- Este portfólio usa React, Vite, TypeScript rigoroso, CSS Modules, GSAP, `@gsap/react`, ScrollTrigger, i18next, react-i18next, React Router e ESLint.
- Não adicionar Tailwind CSS, Styled Components, Emotion, Motion/Framer Motion, bibliotecas de componentes visuais nem outras bibliotecas de animação sem autorização explícita.
- Usar Git com mensagens de commit no padrão Conventional Commits. Não criar commits sem solicitação.

## Estrutura e código

- `src/pages` contém páginas e rotas; `src/sections` contém seções da página; `src/components` contém componentes compartilhados; `src/hooks` contém hooks reutilizáveis.
- `src/assets/{fonts,icons,images}` guarda recursos aprovados. Criar arquivos somente quando houver conteúdo real.
- `src/i18n/locales/{pt,en}` contém traduções JSON; `src/styles` contém CSS global e tokens; `src/types` contém tipos compartilhados quando necessários.
- Componentes devem priorizar JSX semântico, conteúdo e composição. Evitar componentes vazios ou abstrações prematuras.
- Usar tipos explícitos quando a inferência não for clara. Evitar `any`, afirmações não nulas desnecessárias e duplicação de tipos.
- Usar CSS Modules para estilos de páginas, seções e componentes. Manter o CSS global restrito a reset, base e tokens. Não definir valores visuais finais antes do Figma.

## Animação

- Separar a lógica GSAP da estrutura visual. Mover animações complexas para hooks ou módulos próprios, por exemplo `Hero/useHeroAnimation.ts`.
- Integrar GSAP ao React com `useGSAP`, refs e `scope`; evitar seletores globais.
- Usar timelines para sequências sincronizadas e ScrollTrigger somente quando necessário. Garantir limpeza de animações e triggers.
- Respeitar `prefers-reduced-motion` e evitar que GSAP e CSS animem a mesma propriedade simultaneamente.
- Não implementar animações até a etapa de design correspondente.

## Conteúdo e design

- Manter `pt-BR` como idioma inicial e fallback. Persistir mudanças em `localStorage` e sincronizar `html[lang]`. Toda string de interface deve passar pelas traduções.
- O Figma fornecido nas próximas etapas é a fonte da verdade para medidas, proporções, hierarquia, cores, tipografia e comportamento responsivo. Não inventar elementos nem alterar decisões de design sem autorização.
- Conferir os frames desktop e mobile; consultar o usuário quando um comportamento não estiver especificado.
- Priorizar HTML semântico, navegação por teclado, contraste, rótulos acessíveis e foco visível. Evitar posicionamento absoluto desnecessário.
- Alterar somente o necessário para a tarefa atual. Antes de entregar, executar lint, verificação TypeScript e build, além de conferir o servidor de desenvolvimento quando pertinente.

## Fluxo de trabalho

- Desenvolver incrementalmente, uma etapa por vez. Não avançar para a próxima etapa sem aprovação explícita do usuário.
- Não implementar funcionalidades fora do escopo solicitado.
- Antes de modificar arquivos existentes, verificar a arquitetura atual e preservar comportamentos aprovados.
- Quando houver ambiguidades no Figma ou nos requisitos, solicitar esclarecimentos em vez de inventar soluções.

## Ordem de implementação de cada seção

1. Analisar o Figma desktop e mobile.
2. Implementar estrutura semântica e layout desktop.
3. Implementar responsividade mobile.
4. Validar a fidelidade visual em ambos os layouts.
5. Implementar as animações GSAP em arquivos separados.
6. Validar animações, acessibilidade e comportamento responsivo.
7. Sugerir um Conventional Commit, sem executá-lo automaticamente.

## Internacionalização

- Validar o layout em português e inglês.
- Evitar textos fixos dentro de componentes; usar os arquivos de tradução.
- Garantir que mudanças de idioma não quebrem o layout ou as animações.
- Não alterar o conteúdo das traduções sem necessidade.

## Entrega de cada etapa

- Ao concluir uma tarefa, apresentar resumo das alterações, arquivos criados ou modificados, decisões técnicas relevantes, resultados das validações e pendências ou limitações.
- Sugerir um Conventional Commit. Não criar commits automaticamente.
