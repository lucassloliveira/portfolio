# Lucas Luz — Portfólio

Portfólio pessoal desenvolvido com **React**, **Vite** e **Tailwind CSS**, apresentando minha trajetória como desenvolvedor full-stack em formação com foco em Java e React.

🔗 **[Ver portfólio online](https://portfolio-eta-ashy-fzkci9xs3v.vercel.app/)** 

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# 1. Clone o repositório
git clone https://github.com/lucassloliveira/portifolio.git
cd portifolio

# 2. Instale as dependências
npm install --legacy-peer-deps

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

---

## Deploy

O projeto está publicado via **Vercel**. Para fazer seu próprio deploy:

1. Faça um fork ou clone do repositório para sua conta GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**
3. Importe o repositório — o Vite é detectado automaticamente
4. Clique em **Deploy**

A cada `git push` na branch `main`, o Vercel re-deploya automaticamente.

**Alternativas gratuitas:**
- [Netlify](https://netlify.com): build command `npm run build`, publish dir `dist`
- [GitHub Pages](https://pages.github.com): requer configuração de `base` no `vite.config.js`

---

## Projetos apresentados

| Projeto | Descrição | Tecnologias |
|---|---|---|
| **Cadastro de Usuários** | Integração com API ViaCEP para preenchimento automático de endereço pelo CEP, com persistência via localStorage | HTML, CSS, JavaScript |
| **ClienteHub** | CRUD completo consumindo API REST, com tratamento de erros por status HTTP e feedback visual por operação | HTML, CSS, JavaScript |
| **Catálogo de Produtos** | Filtro por categoria e ordenação por preço em React, aplicando fluxo unidirecional de dados e componentização | React, Vite |
| **Todo List** | Estado global com Context API + useReducer e hook customizado para persistência via localStorage | React, Vite |
| **Jogo de Adivinhação** | Feedback "maior/menor" sem frameworks, focado em manipulação do DOM e controle de estado manual | HTML, CSS, JavaScript |
| **Calculadora de IMC** | Classificação da OMS com feedback visual por faixa e validação de inputs sem bibliotecas externas | HTML, CSS, JavaScript |
| **Parquímetro POO** | POO no front-end com classes Vehicle e Ticket, cálculo de tempo decorrido e troco em tempo real | HTML, CSS, JavaScript |
| **Agência Criativa Web** | Site institucional com metodologia BEM e SASS para variáveis e mixins | HTML, SASS, JavaScript |
| **Estilo Livre — Barbearia** | Landing page responsiva com Bootstrap 5, explorando o grid system e componentes nativos | HTML, CSS, Bootstrap 5 |
| **Pet&Style — Loja Virtual** | Loja virtual com Tailwind CSS e foco em acessibilidade — contraste WCAG AA e navegação por teclado | HTML, JavaScript, Tailwind CSS |

---

## Tecnologias do portfólio

| Tecnologia | Uso |
|---|---|
| React 19 | Interface e componentização |
| Vite 8 | Build tool e servidor de desenvolvimento |
| Tailwind CSS 3 | Estilização utilitária |
| JetBrains Mono | Fonte de código |
| Syne | Fonte de display |

---

## Estrutura do projeto

```
src/
├── components/
│   ├── ui/
│   │   ├── SectionLabel.jsx   # Label estilo comentário de código
│   │   └── Divider.jsx        # Linha decorativa
│   ├── Navbar.jsx             # Navbar fixa com detecção de seção e menu mobile
│   ├── Hero.jsx               # Hero com typewriter e partículas animadas via rAF
│   ├── Sobre.jsx              # Apresentação pessoal com card estilo terminal
│   ├── Projetos.jsx           # Grid de projetos com filtro por categoria
│   ├── ProjetoCard.jsx        # Card reutilizável com suporte a screenshot e demo
│   ├── Habilidades.jsx        # Skills por categoria com indicadores de progresso
│   ├── Contato.jsx            # Formulário integrado ao Formspree
│   └── Footer.jsx
├── data/
│   └── dados.js               # ⭐ Fonte única de dados — edite aqui
├── hooks/
│   ├── useTypewriter.js       # Hook do efeito de digitação
│   └── useReveal.js           # Hook de animação de entrada por scroll
├── index.css                  # Tailwind + estilos globais
├── main.jsx
└── Portfolio.jsx              # Componente raiz
```

---

## Personalização

Todas as informações pessoais, projetos e habilidades estão centralizadas em `src/data/dados.js`.

Para adicionar screenshots de projetos, coloque os arquivos em `public/screenshots/` e preencha o campo `imagem` de cada projeto em `dados.js`:

```js
imagem: '/screenshots/nome-do-projeto.png',
```

---

_Desenvolvido por Lucas Luz · [linkedin.com/in/lucas-oliveira-799b33262](https://www.linkedin.com/in/lucas-oliveira-799b33262/)_
---

## Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência.
