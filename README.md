# Aldmiro Passagem | Portfolio & Professional Website

Website pessoal e profissional desenvolvido em React + TypeScript + Vite, com foco em apresentar perfil, competências técnicas, experiência, projetos e canais de contato.

A aplicação foi estruturada para oferecer uma apresentação moderna, elegante e profissional, com suporte a duas versões de idioma:

- Página principal em inglês: `/`
- Versão em português: `/pt`

## Visão Geral

Este projeto funciona como um portfólio digital para posicionar o perfil profissional de Aldmiro Passagem, destacando:

- experiência e formação
- arquitetura de software e desenvolvimento full stack
- tecnologias dominadas
- projetos e entregas técnicas
- canais de contato profissional
- alternância entre versões em inglês e português

## Stack Tecnológica

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- shadcn-style component pattern

## Funcionalidades

- layout premium e responsivo
- hero section com apresentação pessoal
- seções de perfil, serviços, stack e projetos
- cards com tecnologias e competências
- links de contato para GitHub, LinkedIn e e-mail
- alternador de idioma com dropdown e bandeiras
- suporte a URLs de navegação em inglês (`#about`, `#services`, `#projects`, `#contact`)

## Estrutura do Projeto

```text
aldmiro-portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js
├── tailwind.config.js
├── public/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   └── lib/
└── README.md
```

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm ou outro gerenciador de pacotes compatível

## Instalação

```bash
npm install
```

## Execução Local

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação será iniciada localmente em:

```text
http://localhost:5173
```

### Build de produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

## Navegação e Idiomas

A aplicação possui duas versões de idioma:

- inglês padrão em `/`
- português em `/pt`

O seletor de idioma fica no header e usa um dropdown com as bandeiras dos idiomas. A navegação por âncoras continua com IDs em inglês internamente, mantendo a estrutura de URL moderna e consistente.

## Personalização

Para ajustar o conteúdo do site, edite os dados em `src/App.tsx`, especialmente:

- `stacks`
- `strengths`
- `services`
- `projects`
- links de contato
- textos de apresentação

## Melhorias Futuras

Possíveis evoluções para o projeto incluem:

- integração com CMS ou conteúdo dinâmico
- paginação de projetos
- landing pages por categoria de serviço
- blog ou artigos técnicos
- animações mais avançadas
- otimização para SEO e metadata por idioma

## Contribuição

Este é um projeto pessoal, mas sugestões e melhorias são bem-vindas. Para contribuir:

1. faça um fork do projeto
2. crie uma branch para a funcionalidade
3. implemente a alteração
4. abra um pull request com uma descrição clara

## Licença

Este projeto é de uso pessoal e não possui uma licença pública definida no momento.

## Contato

- E-mail: aldmiropassagem@outlook.com
- GitHub: https://github.com/aldmiropassagem
- LinkedIn: https://linkedin.com/in/aldmiropassagem

## Observações

O projeto foi pensado para funcionar como uma presença digital profissional, sólida e moderna, com comunicação clara do perfil técnico e valor entregue ao negócio.
