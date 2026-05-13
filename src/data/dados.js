// Dados do portifolio
export const DADOS = {
  nome: "Lucas Luz",
  foto: '/src/assets/perfil.jpeg',
  email: "oliveira.souzaluz@gmail.com",
  github: "https://github.com/lucassloliveira",
  linkedin: "https://www.linkedin.com/in/lucas-oliveira-799b33262/",
  localizacao: "Brasil",
  formacao: "Engenharia de Software",
  foco: "Java Full-Stack",
  disponivel: "Estágios e projetos",
  sobre1: 
    'A tecnologia sempre fez parte da minha vida. O que começou como curiosidade virou escolha de carreira quando percebi que programar é uma das poucas habilidades que transforma ideias em produtos reais, coisas que outras pessoas de fato usam.',
  sobre2: 
    'Estudo Engenharia de Software com foco em me tornar desenvolvedor júnior. Comecei pelo front-end e hoje estou expandindo para Java e Spring Boot, construindo a base full-stack que me permite contribuir em qualquer parte de um produto.',
  sobre3:
    'O que mais me move é ver o resultado na tela de outra pessoa. Cada projeto do meu portfólio nasceu de um problema concreto — e a decisão de qual tecnologia usar sempre veio depois de entender qual era o problema.',    
};

// ─────────────────────────────────────────────
//  PROJETOS
//  destaque: true  → seção de destaques (topo)
//  destaque: false → grid com filtro
//  demo: ''        → botão demo oculto
//  demo: 'https…'  → botão demo visível
// ─────────────────────────────────────────────
export const PROJETOS= [
  {
    id: 1,
    emoji: "🎮",
    titulo: "Jogo de Adivinhação",
    descricao: 
      'Primeiro projeto com lógica de programação pura: feedback instantâneo de "maior/menor" a cada tentativa, implementado sem frameworks para dominar manipulação do DOM e controle de estado manual.',
    tecnologias: ["HTML", "CSS", "JavaScript"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/jogo-adivinhacao.git",
    demo: "",
    imagem: '',
    destaque: false, //aparece com badge de "destaque"
  },
  {
    id: 2,
    emoji: "🧮",
    titulo: "Calculadora de IMC",
    descricao: 
      'Calculadora com classificação da OMS (abaixo do peso até obesidade grau III) e feedback visual por faixa. Desafio principal: validar inputs sem bibliotecas e apresentar o resultado de forma clara e acessível.',
    tecnologias: ["HTML", "CSS", "JavaScript"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/calculadora-imc.git",
    demo: "",
    imagem: '',
    destaque: false,
  },
  {
    id: 3,
    emoji: "🅿️",
    titulo: "Parquímetro",
    descricao: 
      'Simulador de parquímetro aplicando Programação Orientada a Objetos no front-end: classes Vehicle e Ticket, cálculo automático de tempo decorrido e troco, com validação de placa e feedback visual em tempo real.',
    tecnologias: ["HTML", "CSS", "JavaScript"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/parquimetro.git",
    demo: "https://parquimetro-rouge.vercel.app/",
    imagem: '',
    destaque: false,
  },
  {
    id: 4,
    emoji: "📋",
    titulo: "Cadastro de Usuários",
    descricao: 
      'Integração com a API ViaCEP para preencher endereço automaticamente pelo CEP. Decidi armazenar os dados no localStorage para persistência sem back-end — o usuário nunca perde seus cadastros ao recarregar a página.',
    tecnologias: ["HTML", "CSS", "JavaScript", "API ViaCEP", "Fetch API"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/cadastro-usuario.git",
    demo: "https://cadastro-usuario-tau-five.vercel.app/",
    imagem: '/src/assets/cadastros-usuario.png',
    destaque: true,
  },
  {
    id: 5,
    emoji: "👥",
    titulo: "ClienteHub",
    descricao: 
      'CRUD completo consumindo uma API REST externa via Fetch. Implementei tratamento de erros HTTP por status code (404, 500) e feedback visual para cada operação, simulando o fluxo de um sistema de gestão real.',
    tecnologias: ["HTML", "CSS", "JavaScript", "API REST", "Fetch API"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/clientehub.git",
    demo: "https://clientehub.vercel.app/",
    imagem: '/src/assets/clientehub.png',
    destaque: true,
  },
  {
    id: 6,
    emoji: "🎨",
    titulo: "Agência Criativa Web",
    descricao: 
      'Site institucional completo com arquitetura CSS usando metodologia BEM e SASS para variáveis e mixins. Escolhi SASS para aprender como pré-processadores resolvem o problema de manutenção de CSS em escala.',
    tecnologias: ["HTML", "CSS", "JavaScript", "SASS", "Node.js"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/agencia-criativa-web.git",
    demo: "https://agencia-criativa-web-delta.vercel.app/",
    imagem: '',
    destaque: false,
  },
  {
    id: 7,
    emoji: "✂️",
    titulo: "Estilo Livre — Barbearia",
    descricao: 
      'Landing page responsiva para barbearia fictícia construída com Bootstrap 5. Aprendi a usar o grid system e os componentes nativos do Bootstrap de forma eficiente, sem sobrescrever estilos desnecessariamente.',
    tecnologias: ["HTML", "CSS", "Bootstrap"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/estilo-livre.git",
    demo: "",
    imagem: '',
    destaque: false,
  },
  {
    id: 8,
    emoji: "🐾",
    titulo: "Pet&Style — Loja Virtual",
    descricao: 
      'Loja virtual responsiva usando Tailwind CSS com foco em acessibilidade — contraste WCAG AA em todos os botões e navegação por teclado. Primeiro projeto onde apliquei utility-first CSS de forma consistente.',
    tecnologias: ["HTML", "JavaScript", "Tailwind"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/petstyle.git",
    demo: "https://petstyle.vercel.app/",
    imagem: '',
    destaque: false,
  },
  {
    id: 9,
    emoji: "🛍️",
    titulo: "Catálogo de Produtos",
    descricao: 
      'Primeiro projeto React: catálogo com filtro por categoria e ordenação por preço. O desafio foi entender o fluxo unidirecional de dados — props para baixo, callbacks para cima — e componentizar de forma que cada peça seja reutilizável.',
    tecnologias: ["CSS", "React", "Vite"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/catalogo-produtos.git",
    demo: "https://catalogo-produtos-steel.vercel.app/",
    imagem: '/src/assets/catalogo.png',
    destaque: true,
  },
  {
    id: 10,
    emoji: "📝",
    titulo: "Todo List",
    descricao: 
      'Gerenciador de tarefas com Context API + useReducer para estado global, sem Redux. Implementei persistência via localStorage com um hook customizado usePersistentState — o estado sobrevive a recarregamentos automáticamente.',
    tecnologias: ["JavaScript", "React", "Vite"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/todo-list.git",
    demo: "https://todo-list-tau-blue-52.vercel.app/",
    imagem: '/src/assets/todo-list.png',
    destaque: true,
  },
];

// ─────────────────────────────────────────────
//  HABILIDADES
// ─────────────────────────────────────────────
export const HABILIDADES = [
  {
    categoria: "Frontend",
    skills: [
      { nome: "HTML5",        locked: false },
      { nome: "CSS3",         locked: false },
      { nome: "JavaScript",   locked: false },
      { nome: "Bootstrap",    locked: false },
      { nome: "Tailwind CSS", locked: false },
      { nome: "React",        locked: false },
      // studying: true exibe o indicador piscante "estudando agora"
      { nome: "Next.js",      locked: false, studying: true },
      { nome: "TypeScript",   locked: true, tip: "Próximo objetivo" },
    ],
  },
  {
    categoria: "Backend",
    skills: [
      { nome: "Java",            locked: true, tip: "Em breve"},
      { nome: "POO",             locked: true, tip: "Em breve"},
      { nome: "Spring Boot",     locked: true, tip: "Em breve"},
      { nome: "APIs REST",       locked: true, tip: "Em breve"},
      { nome: "Spring Security", locked: true, tip: "Em breve"},
      { nome: "SOLID",           locked: true, tip: "Boas práticas"},
      { nome: "Design Patterns", locked: true, tip: "Boas práticas"},
      { nome: "Testes (JUnit)",  locked: true, tip: "Qualidade de código"},
    ],
  },
  {
    categoria: "Banco de Dados",
    skills: [
      { nome: "MySQL",      locked: true, tip: "Em breve" },
      { nome: "PostgreSQL", locked: true, tip: "Em breve" },
      { nome: "MongoDB",    locked: true, tip: "Banco NoSQL" },
    ],
  },
  {
    categoria: "Ferramentas",
    skills: [
      { nome: "Git",     locked: false },
      { nome: "GitHub",  locked: false },
      { nome: "Docker",  locked: true, tip: "Em breve" },
      { nome: "Postman", locked: true, tip: "Teste de APIs" },
    ],
  },
];

// Frases do efeito de digitação 
export const FRASES_TYPEWRITER = [
  "Desenvolvedor Full-Stack em formação.",
  "Estudante de Engenharia de Software.",
  "Código limpo, soluções reais.",
  "Construindo o futuro, um commit de cada vez.",
];

// Categorias do filtro de projetos
export const CATEGORIAS_FILTRO = ["Todos", "Frontend", "Back-end", "Full-Stack"];

// Configuração da seção de projetos
export const PROJETOS_POR_PAGINA = 6; // projetos carregados por vez
