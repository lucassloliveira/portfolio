// Dados do portifolio
export const DADOS = {
  nome: "Lucas Oliveira",
  foto: "",
  email: "oliveira.souzaluz@gmail.com",
  github: "https://github.com/lucassloliveira",
  linkedin: "https://www.linkedin.com/in/lucas-oliveira-799b33262/",
  localizacao: "Brasil",
  formacao: "Engenharia de Software",
  foco: "Java Full-Stack",
  disponivel: "Estágios e projetos",
  sobre1: 
    "Sou estudante de Engenharia de Software com foco em desenvolvimento full-stack usando Java. Apaixonado por construir soluções que resolvem problemas reais.",
  sobre2: 
    "Atualmente aprofundando meus conhecimentos em Spring Boot, APIs REST e boas práticas de desenvolvimento de software.",  
};

// Lista de projetos
export const PROJETOS= [
  {
    id: 1,
    emoji: "🎮",
    titulo: "Jogo de Adivinhação",
    descricao: 
      "Jogo de adivinhação desenvolvido com HTML, CSS e JavaScript, onde o usuário tenta descobrir um número secreto de 1 a 100 com dicas em tempo real indicando se o palpite é maior ou menor.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/jogo-adivinhacao.git",
    destaque: false, //aparece com badge de "destaque"
  },
  {
    id: 2,
    emoji: "🧮",
    titulo: "Calculadora de IMC",
    descricao: 
      "Calculadora de IMC desenvolvida com HTML, CSS e JavaScript, que permite ao usuário inserir peso e altura para obter o índice de massa corporal com base nos padrões de classificação.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/calculadora-imc.git",
    destaque: false,
  },
  {
    id: 3,
    emoji: "🅿️",
    titulo: "Parquímetro",
    descricao: 
      "Aplicação web de parquímetro desenvolvida com HTML, CSS e JavaScript (POO), que calcula automaticamente o tempo de estacionamento e o troco com base no valor inserido, incluindo validações e feedback visual em tempo real.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/parquimetro.git",
    destaque: false,
  },
  {
    id: 4,
    emoji: "📋",
    titulo: "Cadastro de Usuários",
    descricao: 
      "Aplicação web de cadastro de usuários desenvolvida com HTML, CSS e JavaScript, que utiliza a API ViaCEP para preenchimento automático de endereço e salva os dados no navegador com localStorage.",
    tecnologias: ["HTML", "CSS", "JavaScript", "API ViaCEP", "Fetch API"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/cadastro-usuario.git",
    destaque: true,
  },
  {
    id: 5,
    emoji: "👥",
    titulo: "ClienteHub",
    descricao: 
      "Aplicação web de CRUD de clientes desenvolvida com HTML, CSS e JavaScript, que consome uma API REST via Fetch para cadastrar, listar, editar e excluir dados com validações e feedback visual.",
    tecnologias: ["HTML", "CSS", "JavaScript", "API REST", "Fetch API"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/clientehub.git",
    destaque: true,
  },
  {
    id: 6,
    emoji: "🎨",
    titulo: "Agência Criativa Web",
    descricao: 
      "Site institucional responsivo de uma agência digital fictícia, desenvolvido com HTML, CSS, SASS e JavaScript, aplicando arquitetura modular, metodologia BEM e boas práticas de front-end moderno.",
    tecnologias: ["HTML", "CSS", "JavaScript", "SASS", "Node.js"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/agencia-criativa-web.git",
    destaque: false,
  },
  {
    id: 7,
    emoji: "✂️",
    titulo: "Estilo Livre — Barbearia",
    descricao: 
      "Site institucional responsivo de uma barbearia fictícia, desenvolvido com HTML, CSS e Bootstrap 5, focado em design moderno, boas práticas de front-end e experiência do usuário.",
    tecnologias: ["HTML", "CSS", "Bootstrap"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/estilo-livre.git",
    destaque: false,
  },
  {
    id: 8,
    emoji: "🐾",
    titulo: "Pet&Style — Loja Virtual",
    descricao: 
      "Loja virtual responsiva para produtos pet, desenvolvida com HTML, Tailwind CSS e JavaScript, com foco em design moderno, acessibilidade e experiência do usuário.",
    tecnologias: ["HTML", "JavaScript", "Tailwind"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/petstyle.git",
    destaque: false,
  },
  {
    id: 9,
    emoji: "🛍️",
    titulo: "Catálogo de Produtos",
    descricao: 
      "Catálogo de produtos responsivo desenvolvido com React e Vite, aplicando componentização, gerenciamento de estado, consumo simulado de API e boas práticas de front-end moderno.",
    tecnologias: ["CSS", "React", "Vite"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/catalogo-produtos.git",
    destaque: true,
  },
  {
    id: 10,
    emoji: "📝",
    titulo: "Todo List",
    descricao: 
      "Aplicação de lista de tarefas desenvolvida com React e Vite, utilizando Context API, hooks customizados e técnicas de otimização de performance, com persistência de dados no localStorage.",
    tecnologias: ["JavaScript", "React", "Vite"],
    categoria: "Frontend",
    github: "https://github.com/lucassloliveira/todo-list.git",
    destaque: true,
  },
];

export const HABILIDADES = [
  {
    categoria: "Frontend",
    skills: [
      { nome: "HTML5", locked: false },
      { nome: "CSS3", locked: false },
      { nome: "JavaScript", locked: false },
      { nome: "Bootstrap", locked: false },
      { nome: "Tailwind CSS", locked: false },
      { nome: "React", locked: false },
      // studying: true exibe o indicador piscante "estudando agora"
      { nome: "Next.js", locked: false, studying: true },
      { nome: "TypeScript", locked: true, tip: "Próximo" },
    ],
  },
  {
    categoria: "Backend",
    skills: [
      { nome: "Java", locked: true, tip: "Em breve"},
      { nome: "POO", locked: true, tip: "Em breve"},
      { nome: "Spring Boot", locked: true, tip: "Em breve"},
      { nome: "APIs REST", locked: true, tip: "Em breve"},
      { nome: "Spring Security", locked: true, tip: "Em breve"},
      { nome: "SOLID", locked: true, tip: "Boas práticas"},
      { nome: "Design Patterns", locked: true, tip: "Boas práticas"},
      { nome: "Testes (JUnit)", locked: true, tip: "Qualidade de código"},
    ],
  },
  {
    categoria: "Banco de Dados",
    skills: [
      { nome: "MySQL", locked: true, tip: "Em breve" },
      { nome: "PostgreSQL", locked: true, tip: "Em breve" },
      { nome: "MongoDB", locked: true, tip: "Banco NoSQL" },
    ],
  },
  {
    categoria: "Ferramentas",
    skills: [
      { nome: "Git", locked: false },
      { nome: "GitHub", locked: false },
      { nome: "Docker", locked: true, tip: "Em breve" },
      { nome: "Postman", locked: true, tip: "Teste de APIs" },
    ],
  },
];

// Frases do efeito de digitação 
export const FRASES_TYPEWRITER = [
  "Desenvolvedor Full-Stack em formação.",
  "Estudante de Java.",
  "Amante de código limpo.",
  "Construindo o futuro.",
];

// Categorias do filtro de projetos
export const CATEGORIAS_FILTRO = ["Todos", "Frontend", "Back-end", "Full-Stack"];

// Configuração da seção de projetos
export const PROJETOS_POR_PAGINA = 6; // projetos carregados por vez
