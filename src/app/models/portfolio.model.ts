/** Modelos do portfólio — edite os dados em `data/portfolio.data.ts`. */

export type SkillLevel = 'basic' | 'intermediate' | 'advanced';

export interface SkillItem {
  name: string;
  /** Versão ou faixa usada no dia a dia (ex.: «17 LTS», «.NET 8») — substitui percentagem na UI. */
  version?: string;
  level?: SkillLevel;
  /** Percentagem legada; ignorada na UI quando `version` está definido. */
  percent?: number;
}

/** Categoria de competências (ex.: Front-end, Back-end). */
export interface SkillCategory {
  categoryId: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

/** Indicadores no hero (linha de estatísticas). */
export interface ProfileHighlight {
  label: string;
  value: string;
  icon: string;
  detail?: string;
}

export interface CompanyWorked {
  id: string;
  name: string;
  shortName: string;
  sector: string;
  periodLabel: string;
  summary: string;
  technologies: string[];
  websiteUrl?: string;
  /** Logotipo no cartão (substitui as iniciais no avatar). */
  logoUrl?: string;
  /** Logos claros (ex.: SVG branco): usa fundo escuro no quadrante. */
  logoOnDark?: boolean;
  /** CNPJ formatado (ex.: 00.000.000/0001-00), só para referência no cartão. */
  cnpj?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: string;
  companyRef?: string;
  /** Ex.: Tempo integral */
  employmentType?: string;
  /** Tecnologias / tags no cartão */
  tags?: string[];
}

export type EducationKind = 'degree' | 'certification' | 'course';

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
  kind?: EducationKind;
  /** Logotipo no cartão (substitui o ícone PrimeIcons). */
  logoUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  /** Categoria interna (ex.: saas, gov); o rótulo exibido é `categoryLabel`. */
  category: string;
  categoryLabel: string;
  description: string;
  technologies: string[];
  /** Imagem de capa do cartão (secção em destaque). */
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  /** Mostrar indicador “ao vivo” */
  highlight?: boolean;
}

/** Cartões “Desenvolvimento / Design / Performance” na secção Sobre. */
export interface AboutFeatureCard {
  title: string;
  description: string;
  /** Classe PrimeIcons, ex.: pi pi-code */
  icon: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface Profile {
  fullName: string;
  /** Título principal do hero (ex.: Desenvolvedor Full Stack). */
  heroTitle?: string;
  /** Subtítulo do hero (texto secundário, pode ser mostrado em itálico). */
  heroSubtitle?: string;
  /** Linha abaixo do nome (ex.: Full Stack Developer | RPA). */
  titleTagline?: string;
  headline: string;
  location: string;
  photoUrl?: string;
  roleTags?: string[];
  summary: string;
  email: string;
  /** Telefone para exibição (ex.: (34) 9 9808-7602). */
  phone?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  /** Idiomas (ex.: Inglês intermediário). */
  languages?: LanguageItem[];
  /** URL do PDF do CV (opcional). */
  cvUrl?: string;
  /** Disponível para trabalho — badge no hero */
  availableForWork?: boolean;
  /** Tag flutuante na foto (ex.: status: open_to_work) */
  statusCodeTag?: string;
  /** Parágrafos da secção “Sobre mim” (substituem o bloco único de `summary` nesse layout). */
  aboutParagraphs?: string[];
  /** Cartões de competências abaixo da bio. */
  aboutFeatures?: AboutFeatureCard[];
  /** Frase curta no rodapé escuro. */
  footerTagline?: string;
  /** Título da coluna esquerda na secção Contatos. */
  contactAsideTitle?: string;
  /** Texto introdutório na secção Contatos. */
  contactAsideText?: string;
  highlights: ProfileHighlight[];
  /** Texto opcional abaixo do título da secção Competências (ex.: período das versões). */
  skillsIntro?: string;
  skillCategories: SkillCategory[];
  companies: CompanyWorked[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
}
