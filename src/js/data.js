export const data = {
  about: {
    en: [
      "Hello, I'm David Bitner, a technology enthusiast. I have a background in information systems and 2 years of experience as a freelancer, my specialty is web development. I've worked on projects involving HTML, CSS, JavaScript, Git, Python, SQL, WordPress, Adobe XD, among other technologies.",
      "As a professional, I maintain a high level of dedication, taking full responsibility for my work and meeting deadlines with precision. I am constantly pursuing continuous learning, dedicating hours to self-study and research to stay updated with the latest technologies and trends. My analytical and ethical approach enables me to efficiently and fairly solve problems, always ensuring the integrity and quality of the solutions I deliver.",
      "In addition to my passionate involvement with technology and development, I am an avid enthusiast of nerd culture. This interest not only enriches my leisure time but has also been instrumental in forming friendships with people from different countries, united by our shared passion for science fiction, fantasy universes, and advanced technology.",
      "I am always open to opportunities to contribute to new projects and teams. To discuss how my skills and experiences can be valuable to your initiatives, please feel free to contact me via email at <a href='mailto:david-bitner@hotmail.com'>david-bitner@hotmail.com</a>.",
    ],
    pt: [
      "Olá, eu sou David Bitner, uma pessoa apaixonada por tecnologia. Com uma formação em sistemas da informação e 2 anos de experiência como freelancer, eu me especializo em desenvolvimento web, e já trabalhei em projetos envolvendo HTML, CSS, Javascript, Git, Python, SQL, WordPress, Adobe XD entre outras tecnologias.",
      "Como profissional, mantenho um alto nível de dedicação, assumindo total responsabilidade pelo meu trabalho e cumprindo prazos com precisão. Estou constantemente buscando aprendizado contínuo, dedicando horas ao estudo autodidata e à pesquisa para me manter atualizado com as últimas tecnologias e tendências.",
      "Além do meu envolvimento apaixonado com tecnologia e desenvolvimento, sou um entusiasta ávido por conteúdo nerd. Esse interesse não apenas enriquece meu lazer, mas também foi fundamental para estabelecer amizades com pessoas de diferentes países.",
      "Estou sempre aberto a oportunidades para contribuir com novos projetos e equipes. Para discutir como minhas habilidades e experiências podem ser úteis para suas iniciativas, sinta-se à vontade para entrar em contato comigo através do meu email <a href='mailto:david-bitner@hotmail.com'>david-bitner@hotmail.com</a>.",
    ],
  },
  projects: {
    project1: {
      id: "project1",
      icon: "30projectsIcon.png",
      link: "https://davidbitner.github.io/30-projects/",
      imgs: Array.from({ length: 13 }, (_, i) => `30projects${i + 1}.png`),
      color: "#195020",
      en: {
        title: "30 Projects",
        subtitle: "A big project involving multiple concepts and technologies.",
        highlights: ["API's", "Custom Canvas", "JavaScript modules"],
        text: "A project made to test and showcase different skills. Things like a custom canvas at the homepage to create a matrix effect, consumption of different api's, css, scss, some bootstrap and many different applications of JavaScript.",
      },
      pt: {
        title: "30 Projetos",
        subtitle:
          "Um grande projeto envolvendo múltiplos conceitos e tecnologias.",
        highlights: ["API's", "Custom Canvas", "JavaScript modules"],
        text: "Um projeto feito para testar e demonstrar várias skills. Conceitos como custom canvas na homepage para criar um efeito matrix, consumo de diferentes api's, css, scss, um pouco de bootstrap e muitas diferentes aplicações de JavaScript.",
      },
    },
    project2: {
      id: "project2",
      icon: "landingsPageIcon.png",
      link: "https://davidbitner.github.io/landings-page/",
      imgs: Array.from({ length: 6 }, (_, i) => `landingsPage${i + 1}.png`),
      color: "#714f3b",
      en: {
        title: "Landings Page",
        subtitle: "A landing page.",
        highlights: [
          "Landing Page",
          "Splide Carousel",
          "Ken Burns Effect",
          "Modal",
        ],
        text: "A landing page made using certain concepts of agile software development like sprints, a mental map, class diagram and others. Complex bezier animations to create a cool cinematrographic effect on the main banner.",
      },
      pt: {
        title: "Landings Page",
        subtitle: "Uma landing page.",
        highlights: [
          "Landing Page",
          "Splide Carousel",
          "Ken Burns Effect",
          "Modal",
        ],
        text: "Uma landing page feita usando alguns conceitos agile de desenvolvimento de software como sprints, um mapa mental, diagrama de classe entre outros.",
      },
    },
    project3: {
      id: "project3",
      icon: "autoBlogIcon.png",
      link: "https://davidbitner.github.io/auto-blog/",
      imgs: ["autoBlog1.png", "autoBlog2.png", "autoBlog3.png"],
      color: "#886a84",
      en: {
        title: "Auto Blog",
        subtitle: "A blog that generates random posts.",
        highlights: ["Blog", "API", "Loading info"],
        text: "This is a website that uses the newscather api to generate news based on a topic, with the information from the api a blog post is automatically generated.",
      },
      pt: {
        title: "Auto Blog",
        subtitle: "Um blog que gera posts automaticamente.",
        highlights: ["Blog", "API", "Loading info"],
        text: "Este é um website que usa a api newscather para gerar notícias baseadas em um tópico, com a informação gerada pela api um post é automaticamente criado.",
      },
    },
    project4: {
      id: "project4",
      icon: "crudIcon.png",
      link: "https://davidbitner.github.io/crud/",
      imgs: ["crud1.png", "crud2.png", "crud3.png"],
      color: "#606060",
      en: {
        title: "Crud",
        subtitle: "A crud website created using JavaScript classes.",
        highlights: ["JS Classes", "CRUD"],
        text: "An application with cards, these cards can be visualized, can be created, updated and deleted. Local storage is used so no information is lost.",
      },
      pt: {
        title: "Crud",
        subtitle: "Um website crud criado usando classes JavaScript.",
        highlights: ["JS Classes", "CRUD"],
        text: "Uma aplicação com cards, estes cards podem ser visualizados, criados, atualizados e deletados. Um modal é aberto toda vez que um card é criado.",
      },
    },
    project5: {
      id: "project5",
      icon: "shapesColorsIcon.png",
      link: "https://davidbitner.github.io/shapes-colors/",
      imgs: Array.from({ length: 5 }, (_, i) => `shapesColors${i + 1}.png`),
      color: "#000533",
      en: {
        title: "Shapes Colors",
        subtitle:
          "A website created specifically to learn how container manipulation works.",
        highlights: ["Mouse Position", "Keyboard Options"],
        text: "Website with some cool container manipulation based on mouse position and a set of options. Options can be changed via key presses.",
      },
      pt: {
        title: "Shapes Colors",
        subtitle:
          "Um website criado especificamente para aprender a como manipular containers.",
        highlights: ["Mouse Position", "Keyboard Options"],
        text: "Website com manipulação de container baseado na posição do mouse e um conjunto de opções. Opções podem ser alteradas através de key presses.",
      },
    },
    project6: {
      id: "project6",
      icon: "movieGuideIcon.png",
      link: "https://davidbitner.github.io/movie-guide/",
      imgs: ["movieGuide1.png", "movieGuide2.png", "movieGuide3.png"],
      color: "#771111",
      en: {
        title: "Movie Guide",
        subtitle: "An application to search for movies details.",
        highlights: ["API call", "Grid Responsivenes"],
        text: "Movie search application, input a title, api call return the details about the movie and the application shows that info to the user.",
      },
      pt: {
        title: "Movie Guide",
        subtitle: "Aplicação para pesquisar por detalhes de filmes.",
        highlights: ["API call", "Grid Responsivenes"],
        text: "Website para procura de filmes, usuário coloca o nome do filme no campo de pesquisa, uma call para uma api é feita, e a aplicação mostra as informações.",
      },
    },
  },
  education: [
    {
      where: "Universidade Nove de Julho",
      period: "2016 - 2020",
      en: {
        title: "Bachelor's Degree, Information Systems",
        text: "Bachelor's in Information Systems.",
      },
      pt: {
        title: "Bacharelado, Sistemas da Informação",
        text: "Bacharel em Sistemas da Informação.",
      },
    },
    {
      where: "Udemy",
      period: "2024",
      en: {
        title: "Microsoft Excel - From beginner to advanced",
        text: "Complete course on Microsoft Excel.",
      },
      pt: {
        title: "Microsoft Excel - From beginner to advanced",
        text: "Curso completo de Microsoft Excel.",
      },
    },
    {
      where: "Udemy",
      period: "2021",
      en: {
        title: "The Complete JavaScript Course",
        text: "Modern JavaScript course to master JavaScript with projects, challenges, and theory.",
      },
      pt: {
        title: "The Complete JavaScript Course",
        text: "Curso moderno de JavaScript para dominar JavaScript com projetos, desafios e teoria.",
      },
    },
    {
      where: "Curso em Video",
      period: "2020",
      en: { title: "Git and GitHub", text: "Basics of Git and GitHub." },
      pt: { title: "Git and GitHub", text: "Básico de Git e GitHub." },
    },
    // Adicione os demais itens de educação aqui seguindo o padrão
  ],
  skills: {
    tech: ["JavaScript", "Sass", "CSS", "HTML", "Python"],
    tools: [
      "Visual Studio Code",
      "Git e GitHub",
      "Adobe XD",
      "Photoshop",
      "Microsoft Excel",
      "Trello",
    ],
    soft: {
      en: [
        "Effective Communication",
        "Problem Solving",
        "Adaptability",
        "Resilience",
        "Professional Ethics",
      ],
      pt: [
        "Comunicação Efetiva",
        "Resolução de Problemas",
        "Adaptabilidade",
        "Resiliencia",
        "Ética Profissional",
      ],
    },
    languages: {
      en: ["Portuguese - Native", "English - Fluent", "Spanish - Basic"],
      pt: ["Português - Nativo", "Inglês - Fluente", "Espanhol - Básico"],
    },
  },
};
