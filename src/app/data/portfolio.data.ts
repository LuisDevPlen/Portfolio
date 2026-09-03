/**
 * Dados do portfólio — alinhados ao currículo atualizado (2026).
 * Coloque o PDF em `src/assets/cv.pdf` se quiser o botão «Baixar CV» a apontar para um ficheiro local.
 */

import { Profile } from '../models/portfolio.model';

export const PROFILE: Profile = {
  fullName: 'Luís Augusto Alves Custódio',
  titleTagline: 'Full Stack Developer · .NET · C# · Java · Angular',
  headline:
    'Mais de 7 anos a construir e evoluir sistemas corporativos de alta criticidade — arquitetura, APIs e integrações — ' +
    'com foco em qualidade, escalabilidade e boas práticas (DDD, SOLID, Clean Code, TDD).',
  location: 'Uberaba, MG · Brasil · disponível remoto',
  photoUrl: 'assets/profile-photo.png',
  roleTags: [
    'Angular',
    'TypeScript',
    'Java',
    'C#',
    'ASP.NET',
    '.NET',
    'SQL Server',
    'Oracle',
    'PostgreSQL',
    'Docker',
    'Azure DevOps',
  ],
  summary: '',
  aboutParagraphs: [
    'Desenvolvedor Full Stack com mais de 7 anos de experiência em C#, .NET, ASP.NET, Java, Angular, TypeScript e ' +
      'JavaScript, atuando em sistemas corporativos de alta criticidade. Experiência em arquitetura com DDD, SOLID, ' +
      'Clean Code e TDD, desenvolvimento de RESTful APIs, integração entre sistemas (REST/SOAP), CI/CD, ' +
      'Docker/Kubernetes, SQL Server, PostgreSQL, Oracle e RabbitMQ em ambientes AWS e Azure DevOps. Foco em ' +
      'evolução de sistemas legados, performance e design de APIs. Disponível para início imediato em regime remoto.',
  ],
  email: 'luisaugustoalves13@gmail.com',
  phone: '(34) 9 9808-7602',
  linkedinUrl: 'https://www.linkedin.com/in/luis-augusto-alves-custódio-1861bb129/',
  githubUrl: 'https://github.com/LuisDevPlen',
  cvUrl: 'assets/cv.pdf',
  availableForWork: true,
  statusCodeTag: 'status: open_to_work',

  languages: [{ name: 'Inglês', level: 'Intermediário (leitura técnica avançada)' }],

  highlights: [
    { label: 'Anos de experiência', value: '7+', icon: 'pi pi-calendar' },
    { label: 'Stack principal', value: 'Full Stack', icon: 'pi pi-code' },
    { label: 'Âmbito', value: 'Web & APIs', icon: 'pi pi-globe' },
  ],

  skillsIntro:
    'Trabalhei com as versões indicadas (e equivalentes de cada época) em contexto profissional entre 2018 e 2026.',

  projects: [
    {
      id: 'dino-eats-delivery',
      title: 'Dino Eats Delivery',
      category: 'saas',
      categoryLabel: 'SaaS / Delivery',
      description:
        'Plataforma de delivery para restaurantes e consumidores de Uberaba, com pedidos, cardápio digital e gestão de entregas. Atuação como desenvolvedor Full Stack.',
      technologies: ['Angular', 'TypeScript', '.NET', 'PostgreSQL'],
      highlight: true,
    },
    {
      id: 'smartz',
      title: 'SmartZ — Multi-tenant Business Platform',
      category: 'saas',
      categoryLabel: 'SaaS / Produto',
      description:
        'Plataforma multi-cliente baseada em regras de negócio configuráveis para atendimento a diversos clientes. Atuação como desenvolvedor Full Stack.',
      technologies: ['Angular', 'TypeScript', '.NET', 'PostgreSQL'],
      highlight: true,
    },
    {
      id: 'facial-ai',
      title: 'Plataforma de Análise Facial com IA',
      category: 'ai',
      categoryLabel: 'Inteligência Artificial',
      description:
        'Plataforma de análise facial com IA integrada a APIs de Computer Vision, para processamento de imagens, diagnósticos estéticos, recomendações personalizadas e simulação visual de procedimentos.',
      technologies: ['.NET', 'Angular', 'Computer Vision', 'OpenAI API'],
      highlight: true,
    },
    {
      id: 'pje',
      title: 'PJE — Processo Judicial Eletrônico',
      category: 'gov',
      categoryLabel: 'Setor público',
      description:
        'Gestão de processos judiciais eletrônicos: correções, ajustes técnicos e adequações funcionais. Atuação Full Stack na Spassu.',
      technologies: ['Java', 'Angular', 'PostgreSQL', 'MNI', 'SOAP'],
    },
    {
      id: 'convenio',
      title: 'Convênios & transferências parlamentares',
      category: 'gov',
      categoryLabel: 'Setor público',
      description:
        'Gestão de contratos de convênios e transferências parlamentares, com adequações funcionais e manutenção evolutiva.',
      technologies: ['Java', 'Angular', 'PostgreSQL', 'Docker', 'Kubernetes'],
    },
    {
      id: 'takeblip',
      title: 'Take Blip — Consultor digital',
      category: 'saas',
      categoryLabel: 'SaaS / Atendimento',
      description:
        'Aplicação de atendimento digital: levantamento de requisitos, análise de dados e testes para conformidade funcional.',
      technologies: ['Java', 'Angular', 'RabbitMQ', 'AWS', 'Azure DevOps'],
    },
    {
      id: 'transporte',
      title: 'Reserva de transporte de cargas',
      category: 'saas',
      categoryLabel: 'SaaS / Logística',
      description:
        'Sistema corporativo para solicitações de transporte, integrando clientes e contratantes de serviços logísticos.',
      technologies: ['C#', '.NET', 'Angular', 'SQL Server', 'REST'],
    },
    {
      id: 'logradouros',
      title: 'Logradouros & monitoramento (QR Code)',
      category: 'gov',
      categoryLabel: 'Setor público',
      description:
        'Fiscalização com QR Code: geração de códigos para identificação de mutuários e consulta de dados por residência.',
      technologies: ['C#', '.NET', 'Angular', 'SQL Server'],
    },
  ],

  companies: [
    {
      id: 'nexion',
      name: 'Oficina 5',
      shortName: 'O5',
      sector: 'Prestação de serviços · PJ · Consultoria TOTVS',
      periodLabel: 'Set 2024 — Presente',
      summary:
        'Soluções tecnológicas sob demanda em modelo PJ: análise, correção e evolução de sistemas corporativos, novas funcionalidades, integração entre sistemas e melhoria de performance, aplicando autenticação, autorização e boas práticas de engenharia de software.',
      technologies: ['C#', '.NET', 'EF', 'Angular', 'PrimeNG', 'PostgreSQL', 'SQL Server', 'Oracle', 'REST', 'SOAP', 'CI/CD', 'Git', 'GitLab', 'Jira'],
      websiteUrl: 'https://oficina5.com.br',
      logoUrl: 'assets/logos/companies/oficina5.png',
    },
    {
      id: 'spassu',
      name: 'Spassu',
      shortName: 'SP',
      sector: 'Tecnologia / Software',
      periodLabel: 'Nov 2023 — Ago 2024',
      summary:
        'Sustentação e evolução Full Stack de sistemas corporativos Java e C#: incidentes, requisições e issues; apuração técnica, correções e soluções de contorno, com integração via SOAP/MNI, Docker, Kubernetes, RabbitMQ, AWS e Azure DevOps.',
      technologies: ['Java', 'Angular', 'C#', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'RabbitMQ', 'MNI', 'SOAP', 'Elastic Stack (Kibana)'],
      logoUrl: 'assets/logos/companies/spassu.png',
      websiteUrl: 'https://www.spassu.com.br/',
      cnpj: '39.273.768/0001-89',
    },
    {
      id: 'extreme',
      name: 'Extreme Digital Solutions',
      shortName: 'ED',
      sector: 'Tecnologia / Software',
      periodLabel: 'Jun 2023 — Out 2023',
      summary:
        'Sustentação e evolução Full Stack de sistemas corporativos: incidentes, requisições e melhoria contínua de fluxos. Apuração técnica, correções e evoluções funcionais com integração REST/SOAP/MNI em ambiente containerizado com CI/CD.',
      technologies: ['Java', 'JSF', 'Angular', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'RabbitMQ', 'MNI', 'REST', 'Elastic Stack (Kibana)'],
      logoUrl: 'assets/logos/companies/extreme.png',
      websiteUrl: 'https://www.extremedigital.com.br/',
      cnpj: '14.139.773/0001-68',
    },
    {
      id: 'cast',
      name: 'Cast Group',
      shortName: 'CG',
      sector: 'Tecnologia / Software',
      periodLabel: 'Jan 2023 — Jun 2023',
      summary:
        'Desenvolvimento, manutenção e evolução de sistemas corporativos Java: análise técnica, implementação de funcionalidades e adequação de regras de negócio. Correções e evolução de aplicações JSF/PrimeFaces/RichFaces com integração REST/SOAP.',
      technologies: ['Java', 'JavaScript', 'JSF', 'PrimeFaces', 'RichFaces', 'Oracle', 'REST', 'SOAP', 'Git', 'GitLab'],
      logoUrl: 'assets/logos/companies/cast.png',
      websiteUrl: 'https://www.castgroup.com.br/',
      cnpj: '03.143.181/0001-01',
    },
    {
      id: 'impulso',
      name: 'Impulso',
      shortName: 'IM',
      sector: 'Tecnologia / Software',
      periodLabel: 'Jul 2022 — Jan 2023',
      summary:
        'Desenvolvimento Full Stack de aplicações de atendimento digital e automação de processos: levantamento de requisitos, implementação de funcionalidades, testes automatizados e manuais e documentação técnica.',
      technologies: ['C#', 'ASP.NET', 'Web API', 'Angular', 'TypeScript', 'SQL Server', 'Selenium', 'xUnit', 'JUnit', 'Git', 'GitHub'],
      logoUrl: 'assets/logos/companies/impulso.png',
      websiteUrl: 'https://impulso.team/pt',
      cnpj: '46.743.554/0001-80',
    },
    {
      id: 'sanfir',
      name: 'Sanfir',
      shortName: 'SF',
      sector: 'Tecnologia / Software',
      periodLabel: 'Jul 2019 — Jul 2022',
      summary:
        'Desenvolvimento Full Stack: implementação de funcionalidades, manutenção corretiva/evolutiva e integração front-end/back-end. APIs REST e serviços com Entity Framework, aplicando DDD, SOLID e Clean Code com rastreabilidade de processos.',
      technologies: ['C#', '.NET', 'EF', 'ASP.NET', 'Angular 9', 'TypeScript', 'SQL Server', 'REST', 'SOAP', 'Git', 'GitLab'],
      logoUrl: 'assets/logos/companies/sanfir.png',
      websiteUrl: 'https://www.sanfir.com.br/',
    },
    {
      id: 'codiub',
      name: 'Codiub',
      shortName: 'CD',
      sector: 'Tecnologia / Software',
      periodLabel: 'Mar 2018 — Mai 2019',
      summary:
        'Desenvolvimento e manutenção de sistemas web, mobile e automação corporativa: análises técnicas, implementação de funcionalidades e integração entre camadas front-end/back-end com Hibernate e APIs REST.',
      technologies: ['Java', 'Web API REST', 'Angular', 'SQLite', 'Oracle', 'Hibernate', 'Git', 'GitHub'],
      logoUrl: 'assets/logos/companies/codiub.svg',
      logoOnDark: true,
      websiteUrl: 'https://www.codiub.com.br/',
    },
  ],

  skillCategories: [
    {
      categoryId: 'frontend',
      title: 'Front-end & UI',
      icon: 'pi pi-desktop',
      skills: [
        { name: 'Angular', version: '18+' },
        { name: 'React / Next.js' },
        { name: 'PrimeNG / PrimeFaces', version: '17 / 12' },
        { name: 'TypeScript & JavaScript', version: 'TS 5.x · ES2022' },
        { name: 'HTML / CSS / SCSS', version: 'HTML5 · CSS3' },
        { name: 'JSF / RichFaces', version: 'JSF 2.3' },
      ],
    },
    {
      categoryId: 'backend',
      title: 'Back-end & linguagens',
      icon: 'pi pi-server',
      skills: [
        { name: 'C# / .NET / ASP.NET Core / Web API', version: '.NET 8' },
        { name: 'Java (ecossistema corporativo)', version: '17 / 21 LTS' },
        { name: 'Python', version: '3.12' },
        { name: 'Entity Framework Core', version: 'EF Core 8' },
        { name: 'Hibernate' },
      ],
    },
    {
      categoryId: 'architecture',
      title: 'Arquitetura & APIs',
      icon: 'pi pi-sitemap',
      skills: [
        { name: 'Clean Architecture, DDD, SOLID, Clean Code' },
        { name: 'CQRS & Event-Driven Architecture' },
        { name: 'Microservices' },
        { name: 'RESTful APIs & OpenAPI (Swagger)' },
        { name: 'JWT, OAuth 2.0, OpenID Connect, gRPC' },
        { name: 'Design Patterns' },
      ],
    },
    {
      categoryId: 'data-infra',
      title: 'Dados, integração & infra',
      icon: 'pi pi-database',
      skills: [
        { name: 'SQL Server', version: '2022' },
        { name: 'PostgreSQL', version: '16' },
        { name: 'Oracle', version: '19c' },
        { name: 'SQLite / MongoDB' },
        { name: 'REST / SOAP / MNI', version: 'SOAP 1.2 · HTTP/1.1+' },
        { name: 'Docker & Kubernetes', version: 'Docker 24 · K8s 1.29' },
        { name: 'AWS & Azure DevOps', version: 'SDKs atuais' },
        { name: 'RabbitMQ / Apache Kafka' },
        { name: 'CI/CD & GitHub Actions' },
      ],
    },
    {
      categoryId: 'quality',
      title: 'Qualidade, métodos & ferramentas',
      icon: 'pi pi-check-circle',
      skills: [
        { name: 'Git / GitHub / GitLab', version: 'Git 2.x' },
        { name: 'Jira & pipelines CI/CD', version: 'Cloud · Azure Pipelines' },
        { name: 'TDD & testes (xUnit, JUnit, Selenium)', version: 'xUnit · JUnit 5 · Selenium 4' },
        { name: 'Scrum, Kanban, Agile' },
        { name: 'Observabilidade (Serilog)' },
      ],
    },
    {
      categoryId: 'ai',
      title: 'IA & LLMs',
      icon: 'pi pi-bolt',
      skills: [
        { name: 'OpenAI API / Azure OpenAI' },
        { name: 'AI Agents & MCP (Model Context Protocol)' },
        { name: 'Prompt Engineering & RAG' },
        { name: 'LangChain / Semantic Kernel' },
        { name: 'Cursor AI' },
        { name: 'Claude' },
        { name: 'GitHub Copilot' },
        { name: 'ChatGPT' },
      ],
    },
  ],

  experiences: [
    {
      period: 'Set 2024 — Presente',
      title: 'Desenvolvedor sênior',
      company: 'Oficina 5 (PJ)',
      companyRef: 'nexion',
      employmentType: 'Prestação de serviços · remoto · Consultoria TOTVS',
      description:
        'Desenvolvimento de soluções tecnológicas sob demanda em modelo PJ: análise, correção e evolução de sistemas corporativos, novas funcionalidades, integração entre sistemas e melhoria de performance de aplicações críticas, aplicando autenticação, autorização e boas práticas de engenharia de software.',
      icon: 'pi pi-briefcase',
      tags: ['C#', '.NET', 'EF', 'Angular', 'PrimeNG', 'PostgreSQL', 'SQL Server', 'Oracle', 'REST', 'SOAP', 'DDD', 'SOLID'],
    },
    {
      period: 'Nov 2023 — Ago 2024',
      title: 'Desenvolvedor pleno — Full Stack',
      company: 'Spassu',
      companyRef: 'spassu',
      employmentType: 'Tempo integral',
      description:
        'Sustentação e evolução de sistemas corporativos Java e C#: incidentes, requisições e issues; apuração técnica, correções, soluções de contorno, manutenção corretiva e evolutiva, com integração via SOAP/MNI, Docker, Kubernetes, RabbitMQ, AWS e Azure DevOps.',
      icon: 'pi pi-building',
      tags: ['Java', 'Angular', 'C#', 'PostgreSQL', 'Docker', 'K8s', 'AWS', 'RabbitMQ', 'MNI', 'SOAP', 'GitLab', 'Jira'],
    },
    {
      period: 'Jun 2023 — Out 2023',
      title: 'Desenvolvedor pleno — Full Stack',
      company: 'Extreme Digital Solutions',
      companyRef: 'extreme',
      employmentType: 'Tempo integral',
      description:
        'Sustentação e evolução de sistemas corporativos: incidentes, requisições e melhoria contínua de fluxos. Apuração técnica, correções e evoluções funcionais com integração REST/SOAP/MNI em ambiente containerizado com CI/CD.',
      icon: 'pi pi-chart-line',
      tags: ['Java', 'JSF', 'Angular', 'PostgreSQL', 'Docker', 'AWS', 'RabbitMQ', 'MNI', 'REST'],
    },
    {
      period: 'Jan 2023 — Jun 2023',
      title: 'Desenvolvedor pleno — Full Stack',
      company: 'Cast group',
      companyRef: 'cast',
      employmentType: 'Tempo integral',
      description:
        'Desenvolvimento, manutenção e evolução de sistemas Java: análises técnicas, regras de negócio, correções e evolução contínua de aplicações JSF/PrimeFaces/RichFaces com foco em estabilidade.',
      icon: 'pi pi-building',
      tags: ['Java', 'JSF', 'PrimeFaces', 'RichFaces', 'Oracle', 'REST', 'SOAP', 'Git', 'GitLab'],
    },
    {
      period: 'Jul 2022 — Jan 2023',
      title: 'Desenvolvedor pleno — Full Stack',
      company: 'Impulso',
      companyRef: 'impulso',
      employmentType: 'Tempo integral',
      description:
        'Atendimento digital e automação: levantamento de requisitos, implementação, testes automatizados e manuais (Selenium, xUnit, JUnit), documentação técnica e garantia de conformidade.',
      icon: 'pi pi-send',
      tags: ['C#', 'ASP.NET', 'Angular', 'TypeScript', 'SQL Server', 'Selenium', 'xUnit', 'JUnit', 'REST', 'SOAP'],
    },
    {
      period: 'Jul 2019 — Jul 2022',
      title: 'Desenvolvedor pleno — Full Stack',
      company: 'Sanfir',
      companyRef: 'sanfir',
      employmentType: 'Tempo integral',
      description:
        'Implementação de funcionalidades, manutenção corretiva e evolutiva, integração front-end e back-end e adequação de regras de negócio, com APIs REST e Entity Framework.',
      icon: 'pi pi-box',
      tags: ['C#', '.NET', 'EF', 'Angular 9', 'TypeScript', 'SQL Server', 'REST', 'SOAP', 'Git', 'GitLab'],
    },
    {
      period: 'Mar 2018 — Mai 2019',
      title: 'Desenvolvedor júnior — Full Stack',
      company: 'Codiub',
      companyRef: 'codiub',
      employmentType: 'Tempo integral',
      description:
        'Desenvolvimento e manutenção de sistemas web, mobile e automação: análises técnicas, integração entre camadas e apoio à estabilidade das soluções.',
      icon: 'pi pi-star',
      tags: ['Java', 'Web API REST', 'Angular', 'SQLite', 'Oracle', 'Hibernate', 'REST', 'Git', 'GitHub'],
    },
  ],

  education: [
    {
      kind: 'degree',
      degree: 'Engenharia da computação',
      institution: 'Uniube',
      period: 'Fev 2018 — Dez 2022',
      detail: 'Formação superior com base sólida em software, sistemas e disciplinas de engenharia.',
      logoUrl: 'assets/logos/uniube.svg',
    },
    {
      kind: 'course',
      degree: 'Curso de inglês',
      institution: 'CCAA — Uberaba',
      period: 'Fev 2017 — Dez 2019',
      detail: 'Complemento de idioma para leitura técnica e comunicação profissional.',
      logoUrl: 'assets/logos/ccaa.svg',
    },
    {
      kind: 'certification',
      degree: 'Curso técnico em administração',
      institution: 'Colégio Nossa Senhora das Dores — Uberaba',
      period: 'Fev 2016 — Dez 2016',
      detail: 'Base em processos, organização e visão de negócio.',
      logoUrl: 'assets/logos/cnsd.png',
    },
  ],
};

export { severityForLevel, skillLevelLabel } from '../models/portfolio.utils';
