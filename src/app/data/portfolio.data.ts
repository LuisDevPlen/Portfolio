/**
 * Dados do portfólio — alinhados ao PDF «Currículo - Luis Augusto-Atualizado (3) (1).pdf».
 * Coloque o PDF em `src/assets/cv.pdf` se quiser o botão «Baixar CV» a apontar para um ficheiro local.
 */

import { Profile } from '../models/portfolio.model';

export const PROFILE: Profile = {
  fullName: 'Luís Augusto Alves Custódio',
  titleTagline: 'Full Stack Developer · Automação RPA',
  headline:
    'Mais de 7 anos a construir e evoluir sistemas corporativos — web, integrações e APIs — com foco em qualidade, ' +
    'escalabilidade e boas práticas (TDD, SOLID, Clean Code).',
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
  ],
  summary: '',
  aboutParagraphs: [
    'Desenvolvedor Full Stack com mais de 7 anos em desenvolvimento web, com atuação remota. Trabalha com ' +
      'programação orientada a objetos e funcional (C#, Java, Python, TypeScript, JavaScript), SQL, automação de processos e integração ' +
      'de sistemas, pautando-se por TDD, SOLID e clean code, com foco em qualidade, escalabilidade e manutenibilidade. Domina Angular e ' +
      'PrimeNG, Java e C#/.NET (ASP.NET, Web API, EF), REST, SOAP e MNI, PostgreSQL, SQL Server e Oracle, RabbitMQ, Docker, Kubernetes, ' +
      'AWS e fluxos com Git, GitLab e GitHub. Disponível para novas oportunidades em regime remoto.',
  ],
  email: 'luisaugustoalves13@gmail.com',
  phone: '(34) 9 9808-7602',
  linkedinUrl: 'https://www.linkedin.com/in/luis-augusto-alves-custódio-1861bb129/',
  githubUrl: 'https://github.com/LuisDevPlen',
  cvUrl: 'assets/cv.pdf',
  availableForWork: true,
  statusCodeTag: 'status: open_to_work',

  languages: [{ name: 'Inglês', level: 'Intermediário' }],

  highlights: [
    { label: 'Anos de experiência', value: '7+', icon: 'pi pi-calendar' },
    { label: 'Stack principal', value: 'Full Stack', icon: 'pi pi-code' },
    { label: 'Âmbito', value: 'Web & APIs', icon: 'pi pi-globe' },
  ],

  skillsIntro:
    'Trabalhei com as versões indicadas (e equivalentes de cada época) em contexto profissional entre 2018 e 2025.',

  projects: [
    {
      id: 'smartz',
      title: 'SmartZ',
      category: 'saas',
      categoryLabel: 'SaaS / Produto',
      description:
        'Projeto destinado a atender diversos clientes conforme regras de negócio. Atuação como desenvolvedor Full Stack.',
      technologies: ['Angular', 'TypeScript', '.NET', 'PostgreSQL'],
      highlight: true,
    },
    {
      id: 'pje',
      title: 'PJE — Processo Judicial Eletrônico',
      category: 'gov',
      categoryLabel: 'Setor público',
      description:
        'Gestão de processos judiciais: correções, ajustes técnicos e adequações funcionais. Atuação Full Stack na Spassu.',
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
      id: 'cla',
      name: 'CLA Tecnologia',
      shortName: 'CLA',
      sector: 'Prestação de serviços · PJ',
      periodLabel: 'Set 2024 — Presente',
      summary:
        'Soluções tecnológicas sob demanda: análise, correção e evolução de sistemas, novas funcionalidades, integrações e performance.',
      technologies: ['C#', '.NET', 'EF', 'Angular', 'PrimeNG', 'PostgreSQL', 'SQL Server', 'Oracle', 'REST', 'SOAP', 'Git', 'GitLab', 'Jira'],
    },
    {
      id: 'spassu',
      name: 'Spassu',
      shortName: 'SP',
      sector: 'Tecnologia / Software',
      periodLabel: 'Nov 2023 — Ago 2024',
      summary:
        'Sustentação e evolução de sistemas corporativos: incidentes, requisições e issues; apuração técnica, correções, soluções de contorno e melhoria contínua.',
      technologies: ['Java', 'Angular', 'C#', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'RabbitMQ', 'MNI', 'SOAP'],
      logoUrl: 'assets/logos/companies/spassu.png',
      websiteUrl: 'https://www.spassu.com.br/',
      cnpj: '39.273.768/0001-89',
    },
    {
      id: 'cast',
      name: 'Cast Group',
      shortName: 'CG',
      sector: 'Tecnologia / Software',
      periodLabel: 'Jan 2023 — Jun 2023',
      summary:
        'Desenvolvimento, manutenção e evolução de sistemas corporativos: análises técnicas, regras de negócio, correções e estabilidade.',
      technologies: ['Java', 'JavaScript', 'JSF', 'PrimeFaces', 'RichFaces', 'Oracle', 'REST', 'SOAP', 'Git', 'GitLab'],
      logoUrl: 'assets/logos/companies/cast.png',
      websiteUrl: 'https://www.castgroup.com.br/',
      cnpj: '03.143.181/0001-01',
    },
    {
      id: 'extreme',
      name: 'Extreme Digital Solutions',
      shortName: 'ED',
      sector: 'Tecnologia / Software',
      periodLabel: 'Jul 2022 — Jan 2023',
      summary:
        'Full Stack em sustentação corporativa: incidentes e issues, apuração técnica, manutenção corretiva/evolutiva e melhoria de fluxos.',
      technologies: ['Java', 'JSF', 'Angular', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'RabbitMQ', 'MNI', 'REST'],
      logoUrl: 'assets/logos/companies/extreme.png',
      websiteUrl: 'https://www.extremedigital.com.br/',
      cnpj: '14.139.773/0001-68',
    },
    {
      id: 'impulso',
      name: 'Impulso',
      shortName: 'IM',
      sector: 'Tecnologia / Software',
      periodLabel: '2022 — 2023',
      summary:
        'Aplicações de atendimento digital e automação: requisitos, implementação, testes automatizados e manuais, documentação técnica.',
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
        'Sistemas corporativos: novas funcionalidades, manutenção corretiva/evolutiva, integração front/back e regras de negócio.',
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
        'Web, mobile e automação: análises técnicas, integração entre camadas e evolução das soluções com foco em qualidade.',
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
        { name: 'Java (ecossistema corporativo)', version: '17 / 21 LTS' },
        { name: 'C# / .NET / ASP.NET / Web API', version: '.NET 8' },
        { name: 'Python', version: '3.12' },
        { name: 'Entity Framework', version: 'EF Core 8' },
      ],
    },
    {
      categoryId: 'data-infra',
      title: 'Dados, integração & infra',
      icon: 'pi pi-database',
      skills: [
        { name: 'PostgreSQL', version: '16' },
        { name: 'SQL Server', version: '2022' },
        { name: 'Oracle', version: '19c' },
        { name: 'REST / SOAP / MNI', version: 'SOAP 1.2 · HTTP/1.1+' },
        { name: 'Docker & Kubernetes', version: 'Docker 24 · K8s 1.29' },
        { name: 'AWS & Azure DevOps', version: 'SDKs atuais' },
        { name: 'RabbitMQ', version: '3.13' },
      ],
    },
    {
      categoryId: 'quality',
      title: 'Qualidade, métodos & ferramentas',
      icon: 'pi pi-check-circle',
      skills: [
        { name: 'Git / GitLab / GitHub', version: 'Git 2.x' },
        { name: 'Jira & pipelines CI/CD', version: 'Cloud · Azure Pipelines' },
        { name: 'Microsoft Azure', version: '2018–2025' },
        { name: 'DDD, SOLID, Clean Code' },
        { name: 'TDD & testes (JUnit, xUnit, Selenium)', version: 'JUnit 5 · xUnit · Selenium 4' },
        { name: 'Automação RPA (visão geral)' },
      ],
    },
  ],

  experiences: [
    {
      period: 'Set 2024 — Presente',
      title: 'Desenvolvedor sênior',
      company: 'CLA Tecnologia (PJ)',
      companyRef: 'cla',
      employmentType: 'Prestação de serviços · remoto',
      description:
        'Desenvolvimento de soluções sob demanda: análise, correção e evolução de sistemas, novas funcionalidades, integração entre sistemas e melhoria de performance em aplicações corporativas.',
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
        'Sustentação e evolução de sistemas corporativos: incidentes, requisições e issues; apuração técnica, correções, soluções de contorno, manutenção corretiva e evolutiva.',
      icon: 'pi pi-building',
      tags: ['Java', 'Angular', 'C#', 'PostgreSQL', 'Docker', 'K8s', 'AWS', 'RabbitMQ', 'MNI', 'SOAP', 'GitLab', 'Jira'],
    },
    {
      period: 'Jan 2023 — Jun 2023',
      title: 'Desenvolvedor pleno — Full Stack',
      company: 'Cast group',
      companyRef: 'cast',
      employmentType: 'Tempo integral',
      description:
        'Desenvolvimento, manutenção e evolução de sistemas: análises técnicas, regras de negócio, correções e evolução contínua com foco em estabilidade.',
      icon: 'pi pi-building',
      tags: ['Java', 'JSF', 'PrimeFaces', 'RichFaces', 'Oracle', 'REST', 'SOAP', 'Git', 'GitLab'],
    },
    {
      period: 'Jul 2022 — Jan 2023',
      title: 'Desenvolvedor pleno — Full Stack',
      company: 'Extreme Digital Solutions',
      companyRef: 'extreme',
      employmentType: 'Tempo integral',
      description:
        'Sustentação corporativa: incidentes e issues, verificação de erros, soluções de contorno, manutenção corretiva/evolutiva e melhoria de fluxos.',
      icon: 'pi pi-chart-line',
      tags: ['Java', 'JSF', 'Angular', 'PostgreSQL', 'Docker', 'AWS', 'RabbitMQ', 'MNI', 'REST'],
    },
    {
      period: '2022 — 2023',
      title: 'Desenvolvedor pleno — Full Stack',
      company: 'Impulso',
      companyRef: 'impulso',
      employmentType: 'Tempo integral',
      description:
        'Atendimento digital e automação: levantamento de requisitos, implementação, testes automatizados e manuais, documentação técnica e garantia de conformidade.',
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
        'Implementação de funcionalidades, manutenção corretiva e evolutiva, integração front-end e back-end e adequação de regras de negócio.',
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
