export const data = {
  about: {
    en: [
      {
        icon: "fa-code",
        title: "The Developer",
        text: "Web Developer focused on creating scalable solutions and performant interfaces. Specialist in transforming complex requirements into clean, maintainable code.",
      },
      {
        icon: "fa-rocket",
        title: "The Optimizer",
        text: "I have a genuine passion for optimizing workflows. I thrive on taking repetitive processes and engineering automated solutions for them. Efficiency is a challenge I enjoy.",
      },
      {
        icon: "fa-book-open",
        title: "The Self-Taught",
        text: "As a dedicated enthusiast of nerd culture, I taught myself English to access global communities. This drive to overcome barriers defines how I approach every new technology.",
      },
      {
        icon: "fa-envelope",
        title: "Open to Connect",
        text: "I am always open to opportunities. Feel free to contact me via email at <a href='mailto:david-bitner@hotmail.com'>david-bitner@hotmail.com</a>.",
      },
    ],
    pt: [
      {
        icon: "fa-code",
        title: "O Desenvolvedor",
        text: "Desenvolvedor Web focado em criar soluções escaláveis e interfaces performáticas. Especialista em transformar requisitos complexos em código limpo e manutenível.",
      },
      {
        icon: "fa-rocket",
        title: "O Otimizador",
        text: "Tenho uma paixão genuína por otimizar fluxos de trabalho. Adoro pegar processos repetitivos e criar soluções automatizadas. Melhorar a eficiência é um desafio divertido.",
      },
      {
        icon: "fa-book-open",
        title: "O Autodidata",
        text: "Como um entusiasta da cultura nerd, aprendi inglês sozinho para acessar comunidades globais. Esse ímpeto de superar barreiras define como encaro cada nova tecnologia.",
      },
      {
        icon: "fa-envelope",
        title: "Contato",
        text: "Estou sempre aberto a oportunidades. Sinta-se à vontade para me contatar por e-mail em <a href='mailto:david-bitner@hotmail.com'>david-bitner@hotmail.com</a>.",
      },
    ],
  },

  projects: [
    // --- PROJETOS DESTAQUE (Grid Principal) ---
    {
      id: "project-lobotrans",
      highlight: true,
      title: "Lobotrans",
      imgCover: "projects/lobotrans.jpg",
      icon: "lobotransIcon.jpg",
      link: "https://davidbitner-lobotrans.vercel.app",
      imgs: ["lobotrans1.jpg", "lobotrans2.jpg", "lobotrans3.jpg"],
      color: "#0f3460",
      en: {
        subtitle: "Corporate internal tooling for operational efficiency.",
        highlights: ["Node.js", "Docx Automation", "Process Optimization"],
        text: "Before Lobotrans, incident and occurrence reporting at Transwolff was entirely manual — copying and pasting into Word by hand, a process prone to inconsistent formatting and, critically, forgotten fields in reports that mattered. I built this suite to put the whole workflow on rails: structured forms guide operators through every required field, images are processed and positioned automatically, and the final document is generated from a template with guaranteed consistency. An AI-assisted proofreading step reviews key narrative fields before submission. Used daily by the operational team, it cut report time by ~70% and removed most of the human error that came with the old process.",
      },
      pt: {
        subtitle:
          "Ferramentas internas corporativas para eficiência operacional.",
        highlights: ["Node.js", "Automação Docx", "Otimização de Processos"],
        text: "Antes do Lobotrans, o registro de acidentes e ocorrências na Transwolff era inteiramente manual — copiar e colar no Word à mão, um processo sujeito a formatação inconsistente e, o que é mais crítico, campos esquecidos em relatórios importantes. Criei essa suíte para colocar todo o fluxo nos trilhos: formulários estruturados guiam o operador por cada campo obrigatório, imagens são processadas e posicionadas automaticamente, e o documento final é gerado a partir de um template com consistência garantida. Uma etapa de revisão assistida por IA confere os campos narrativos antes do envio. Usado diariamente pela equipe operacional, reduziu o tempo de relatório em ~70% e eliminou boa parte dos erros humanos do processo antigo.",
      },
    },
    {
      id: "project3", // Mantém o ID para ficar na mesma posição (3º lugar)
      highlight: true,
      title: "Cruzadox",
      imgCover: "project3.png",
      icon: "crosswordIcon.png",
      link: "https://davidbitner.github.io/palavras-cruzadas-de-encaixe/",
      imgs: ["cruzadox1.jpg", "cruzadox2.png"],
      color: "#2c3e50",
      en: {
        subtitle: "Fit-word puzzle generator with print layout.",
        highlights: ["Greedy Algorithm", "Print CSS", "Logic & Math"],
        text: "Built to solve a real gap: my mother couldn't find this style of fit-word puzzle to buy, so I made a generator for her. What started as a personal project became a technical challenge — a custom greedy algorithm calculates the optimal grid layout for any word list, with a print-ready CSS layout for A4 output.",
      },
      pt: {
        subtitle:
          "Gerador de palavras cruzadas de encaixe pronto para impressão.",
        highlights: [
          "Algoritmo Greedy",
          "CSS de Impressão",
          "Lógica Matemática",
        ],
        text: "Criado para resolver uma necessidade real: minha mãe não encontrava esse estilo de palavras cruzadas de encaixe à venda, então fiz um gerador para ela. O que começou como um projeto pessoal virou um desafio técnico — um algoritmo 'greedy' personalizado calcula o melhor encaixe de grade para qualquer lista de palavras, com layout pronto para impressão em A4.",
      },
    },
    {
      id: "project1",
      highlight: true,
      title: "30 Projects",
      imgCover: "project1.jpg",
      icon: "30projectsIcon.svg",
      link: "https://davidbitner.github.io/30-projects/",
      imgs: [
        "30projects1.jpg", "30projects2.jpg", "30projects3.jpg",
        "30projects4.jpg", "30projects5.jpg", "30projects6.jpg",
        "30projects7.jpg", "30projects8.jpg", "30projects9.jpg",
        "30projects10.jpg", "30projects11.jpg", "30projects12.png",
        "30projects13.jpg",
      ],
      color: "#195020",
      en: {
        subtitle: "A massive project involving multiple concepts.",
        highlights: ["API's", "Custom Canvas", "JS Modules"],
        text: "A comprehensive showcase of skills. Features a custom canvas matrix effect, consumption of multiple APIs, advanced CSS/SCSS, Bootstrap integration, and diverse JavaScript applications.",
      },
      pt: {
        subtitle: "Um projeto massivo envolvendo múltiplos conceitos.",
        highlights: ["API's", "Custom Canvas", "JS Modules"],
        text: "Uma demonstração abrangente de habilidades. Apresenta efeito matrix em canvas, consumo de múltiplas APIs, CSS/SCSS avançado, integração com Bootstrap e diversas aplicações JavaScript.",
      },
    },
    {
      id: "project2",
      highlight: true,
      title: "Landings Page",
      imgCover: "project2.jpg",
      icon: "landingsPageIcon.svg",
      link: "https://davidbitner.github.io/landings-page/",
      imgs: [
        "landingsPage1.jpg", "landingsPage2.jpg", "landingsPage3.jpg",
        "landingsPage4.jpg", "landingsPage5.jpg", "landingsPage6.jpg",
      ],
      color: "#714f3b",
      en: {
        subtitle: "High-conversion landing page structure.",
        highlights: ["Agile", "Splide Carousel", "Ken Burns Effect"],
        text: "Developed using Agile concepts (Sprints, Mind Maps). Features complex bezier animations creating a cinematic Ken Burns effect on the main banner.",
      },
      pt: {
        subtitle: "Estrutura de landing page de alta conversão.",
        highlights: ["Agile", "Splide Carousel", "Ken Burns Effect"],
        text: "Desenvolvido usando conceitos Agile (Sprints, Mapas Mentais). Apresenta animações bezier complexas criando um efeito cinematográfico Ken Burns no banner principal.",
      },
    },
    {
      id: "project4",
      highlight: true,
      title: "CRUD",
      imgCover: "project4.jpg",
      icon: "crudIcon.svg",
      link: "https://davidbitner.github.io/crud/",
      imgs: ["crud1.jpg", "crud2.jpg", "crud3.jpg"],
      color: "#606060",
      en: {
        subtitle: "Data management system with persistence.",
        highlights: ["JS Classes", "LocalStorage", "State Management"],
        text: "Full Create-Read-Update-Delete application. Features modal interfaces for data entry and LocalStorage implementation for data persistence.",
      },
      pt: {
        subtitle: "Sistema de gerenciamento de dados com persistência.",
        highlights: ["Classes JS", "LocalStorage", "Gestão de Estado"],
        text: "Aplicação completa de Create-Read-Update-Delete. Possui interfaces modais para entrada de dados e implementação de LocalStorage para persistência.",
      },
    },
    {
      id: "project5",
      highlight: true,
      title: "Shapes and colors",
      imgCover: "project5.jpg",
      icon: "shapesColorsIcon.svg",
      link: "https://davidbitner.github.io/shapes-colors/",
      imgs: [
        "shapesColors1.png", "shapesColors2.jpg", "shapesColors3.jpg",
        "shapesColors4.png", "shapesColors5.jpg",
      ],
      color: "#000533",
      en: {
        subtitle: "Interactive DOM manipulation study.",
        highlights: ["Event Listeners", "Keyboard Events", "CSS Variables"],
        text: "Interactive sandbox exploring container manipulation via mouse coordinates and keyboard events to alter shapes, colors, and dimensions dynamically.",
      },
      pt: {
        subtitle: "Estudo interativo de manipulação do DOM.",
        highlights: ["Event Listeners", "Eventos de Teclado", "Variáveis CSS"],
        text: "Sandbox interativo explorando manipulação de containers via coordenadas do mouse e eventos de teclado para alterar formas, cores e dimensões dinamicamente.",
      },
    },
    {
      id: "project6",
      highlight: true,
      title: "Movie Guide",
      imgCover: "project6.jpg",
      icon: "movieGuideIcon.png",
      link: "https://davidbitner.github.io/movie-guide/",
      imgs: ["movieGuide1.jpg", "movieGuide2.jpg", "movieGuide3.jpg"],
      color: "#771111",
      en: {
        subtitle: "Cinema database interface.",
        highlights: ["REST API", "Responsive Grid", "Error Handling"],
        text: "Movie search engine integrating with external APIs to display detailed metadata, ratings, and posters with a fully responsive layout.",
      },
      pt: {
        subtitle: "Interface de banco de dados de cinema.",
        highlights: ["REST API", "Grid Responsivo", "Tratamento de Erros"],
        text: "Mecanismo de busca de filmes integrando com APIs externas para exibir metadados detalhados, avaliações e pôsteres com layout totalmente responsivo.",
      },
    },

    // --- OUTROS PROJETOS (Modal) ---
    {
      id: "other-bcc",
      highlight: false,
      title: "Blue Crystal Calculator",
      link: "https://davidbitner.github.io/blue-crystal-calculator/",
      imgCover: "projects/bcc.jpg",
    },
    {
      id: "other-hackerman",
      highlight: false,
      title: "Hackerman",
      link: "https://davidbitner.github.io/hackerman/",
      imgCover: "projects/hackerman.png",
    },
    {
      id: "other-dictionary",
      highlight: false,
      title: "Dictionary",
      link: "https://davidbitner.github.io/dictionary/",
      imgCover: "projects/dictionary.png",
    },
    {
      id: "other-excalibur",
      highlight: false,
      title: "Excalibur",
      link: "https://davidbitner.github.io/excalibur-rain/",
      imgCover: "projects/excalibur.jpg",
    },
    {
      id: "other-odp",
      highlight: false,
      title: "ODP",
      link: "https://davidbitner.github.io/odp/",
      imgCover: "projects/odp.jpg",
    },
    {
      id: "other-timers",
      highlight: false,
      title: "Timers",
      link: "https://davidbitner.github.io/timers/",
      imgCover: "projects/timers.jpg",
    },
    {
      id: "other-login",
      highlight: false,
      title: "Login",
      link: "https://davidbitner.github.io/login/",
      imgCover: "projects/login.jpg",
    },
    {
      id: "other-quiz",
      highlight: false,
      title: "Quiz APP",
      link: "https://davidbitner.github.io/quiz-app/",
      imgCover: "projects/quizApp.jpg",
    },
    {
      id: "other-list",
      highlight: false,
      title: "List",
      link: "https://davidbitner.github.io/list/",
      imgCover: "projects/list.jpg",
    },
    {
      id: "other-despertador",
      highlight: false,
      title: "Alarm Clock",
      link: "https://davidbitner.github.io/despertador/",
      imgCover: "projects/despertador.png",
    },
    {
      id: "other-slider",
      highlight: false,
      title: "Sliders",
      link: "https://davidbitner.github.io/slider-design/",
      imgCover: "projects/sliders.jpg",
    },
  ],

  education: [
    {
      where: "Transwolff",
      period: "2024 - Current",
      en: {
        title: "Operational Control Center",
        text: "Responsible for real-time fleet management, camera monitoring, and comprehensive reporting across diverse operational areas and guidelines. Spearheaded the department's digital transformation by identifying bottlenecks in manual processes and implementing automated spreadsheet solutions, significantly increasing data reliability and operational efficiency.",
      },
      pt: {
        title: "Centro de Controle Operacional",
        text: "Responsável pela gestão de frota em tempo real, monitoramento de câmeras e elaboração de relatórios abrangentes de diversas áreas e diretrizes operacionais. Liderei a transformação digital do setor identificando gargalos em processos manuais e implementando automações em planilhas, aumentando significativamente a confiabilidade dos dados e a eficiência operacional.",
      },
    },
    {
      where: "Freelancer",
      period: "2022 - 2024",
      en: {
        title: "Full Stack Web Developer",
        text: "Developed custom web solutions for diverse clients using HTML, CSS, JavaScript, and React. Managed full project lifecycles, from requirement gathering to deployment and maintenance.",
      },
      pt: {
        title: "Desenvolvedor Web Full Stack",
        text: "Desenvolvi soluções web personalizadas para diversos clientes usando HTML, CSS, JavaScript e React. Gerenciei ciclos completos de projeto, do levantamento de requisitos ao deploy e manutenção.",
      },
    },
    {
      where: "Udemy",
      period: "2021",
      en: {
        title: "The Complete JavaScript Course",
        text: "Intensive mastering of modern JavaScript: ES6+, OOP, AJAX, and Asynchronous JS patterns.",
      },
      pt: {
        title: "Curso Completo de JavaScript",
        text: "Domínio intensivo de JavaScript moderno: ES6+, OOP, AJAX e padrões de JS Assíncrono.",
      },
    },
    {
      where: "Universidade Nove de Julho",
      period: "2016 - 2020",
      en: {
        title: "Bachelor's Degree, Information Systems",
        text: "Academic focus on Software Engineering, Database Management, System Analysis, and Project Management methodologies.",
      },
      pt: {
        title: "Bacharelado em Sistemas da Informação",
        text: "Foco acadêmico em Engenharia de Software, Gestão de Banco de Dados, Análise de Sistemas e metodologias de Gestão de Projetos.",
      },
    },
    {
      where: "Curso em Video",
      period: "2020",
      en: {
        title: "Git and GitHub",
        text: "Version control fundamentals, branching strategies, and collaborative workflows.",
      },
      pt: {
        title: "Git e GitHub",
        text: "Fundamentos de controle de versão, estratégias de branching e fluxos de trabalho colaborativos.",
      },
    },
  ],
  skills: {
    tech: [
      "JavaScript (ES6+)",
      "Sass / SCSS",
      "CSS3",
      "HTML5",
      "Python",
      "SQL",
      "Google Apps Script",
      "VBA",
    ],
    tools: [
      "VS Code",
      "Git & GitHub",
      "Adobe XD",
      "Photoshop",
      "Trello",
      "Excel (Advanced)",
      "Looker Studio",
    ],
    soft: {
      en: [
        "Agile Methodologies",
        "Troubleshooting",
        "Adaptability",
        "Technical Documentation",
        "Professional Ethics",
      ],
      pt: [
        "Metodologias Ágeis",
        "Resolução de Problemas",
        "Adaptabilidade",
        "Documentação Técnica",
        "Ética Profissional",
      ],
    },
    languages: {
      en: ["Portuguese - Native", "English - Fluent", "Spanish - Basic"],
      pt: ["Português - Nativo", "Inglês - Fluente", "Espanhol - Básico"],
    },
  },
};
