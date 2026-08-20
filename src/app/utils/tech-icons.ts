/**
 * Logótipos coloridos:
 * - Simple Icons CDN: https://cdn.simpleicons.org/{slug}/{hex}
 * - Devicon (SVG colorido) para slugs que o CDN Simple Icons não expõe (C#, SQL Server, Oracle, AWS, Azure).
 */

const COLORED_SI_CDN = 'https://cdn.simpleicons.org';
const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

/** Slug Simple Icons → cor oficial (hex sem #). Slugs com alias em SLUG_FOR_COLORED_CDN usam o alias na URL. */
const HEX_BY_SLUG: Record<string, string> = {
  angular: 'DD0031',
  openjdk: '437291',
  typescript: '3178C6',
  javascript: 'F7DF1E',
  html5: 'E34F26',
  css: '1572B6',
  sass: 'CC6699',
  dotnet: '512BD4',
  python: '3776AB',
  c: 'A8B9CC',
  postgresql: '4169E1',
  docker: '2496ED',
  kubernetes: '326CE5',
  rabbitmq: 'FF6600',
  swagger: '85EA2D',
  openapiinitiative: '6BA539',
  git: 'F05032',
  github: '181717',
  gitlab: 'FC6D26',
  jira: '0052CC',
  selenium: '43B02A',
  junit5: '25A162',
  sqlite: '003B57',
  hibernate: '59666C',
  mermaid: 'FF3670',
  sonar: '4E9BCD',
  react: '61DAFB',
  nextdotjs: '000000',
  mongodb: '47A248',
  jsonwebtokens: '000000',
  apachekafka: '231F20',
  githubcopilot: '000000',
  claude: 'D97757',
  langchain: '1C3C3C',
  cursor: '000000',
};

/** Slug interno → slug na URL do CDN (quando difere do ficheiro npm). */
const SLUG_FOR_COLORED_CDN: Record<string, string> = {
  css3: 'css',
};

/**
 * Slug → ficheiro Devicon (colorido). Só para marcas em que simpleicons.org não responde.
 */
const DEVICON_FILE_BY_SLUG: Record<string, string> = {
  csharp: 'csharp/csharp-original.svg',
  /** ASP.NET / Core — distinto do logótipo genérico «.NET» (Simple Icons). */
  dotnetcore: 'dotnetcore/dotnetcore-original.svg',
  microsoftsqlserver: 'microsoftsqlserver/microsoftsqlserver-plain.svg',
  oracle: 'oracle/oracle-original.svg',
  amazonaws: 'amazonwebservices/amazonwebservices-line-wordmark.svg',
  microsoftazure: 'azure/azure-original.svg',
  azuredevops: 'azuredevops/azuredevops-original.svg',
};

/**
 * Slug → URL direta (Simple Icons via jsdelivr npm). Usado quando o slug não existe
 * no CDN cdn.simpleicons.org (ex.: «openai» devolve 404 nesse edge). O SVG do pacote
 * npm já vem na cor oficial da marca.
 */
const DIRECT_URL_BY_SLUG: Record<string, string> = {
  openai: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg',
};

/** Nome normalizado → slug interno (chave de HEX / Devicon / alias) */
const SLUG_BY_KEY: Record<string, string> = {
  angular: 'angular',
  primeng: 'angular',
  primefaces: 'openjdk',
  typescript: 'typescript',
  javascript: 'javascript',
  html: 'html5',
  css: 'css3',
  scss: 'sass',
  sass: 'sass',
  jsf: 'openjdk',
  java: 'openjdk',
  openjdk: 'openjdk',
  csharp: 'csharp',
  'c#': 'csharp',
  dotnet: 'dotnet',
  '.net': 'dotnet',
  aspnet: 'dotnetcore',
  'asp.net': 'dotnetcore',
  aspnetcore: 'dotnetcore',
  'asp.net core': 'dotnetcore',
  /** «ASP» sozinho mantém .NET; «ASP.NET» resolve antes pelo token composto. */
  asp: 'dotnet',
  python: 'python',
  c: 'c',
  entity: 'dotnet',
  entityframework: 'dotnet',
  ef: 'dotnet',
  postgresql: 'postgresql',
  postgres: 'postgresql',
  'sql server': 'microsoftsqlserver',
  sqlserver: 'microsoftsqlserver',
  oracle: 'oracle',
  docker: 'docker',
  kubernetes: 'kubernetes',
  k8s: 'kubernetes',
  aws: 'amazonaws',
  amazonaws: 'amazonaws',
  azure: 'microsoftazure',
  microsoftazure: 'microsoftazure',
  'azure devops': 'azuredevops',
  azuredevops: 'azuredevops',
  rabbitmq: 'rabbitmq',
  rest: 'swagger',
  swagger: 'swagger',
  soap: 'openapiinitiative',
  openapi: 'openapiinitiative',
  git: 'git',
  github: 'github',
  gitlab: 'gitlab',
  jira: 'jira',
  selenium: 'selenium',
  junit: 'junit5',
  junit5: 'junit5',
  xunit: 'dotnet',
  nunit: 'dotnet',
  mstest: 'dotnet',
  sqlite: 'sqlite',
  hibernate: 'hibernate',
  mni: 'rabbitmq',
  richfaces: 'openjdk',
  ddd: 'mermaid',
  solid: 'sonar',
  web: 'swagger',
  api: 'swagger',
  react: 'react',
  'next.js': 'nextdotjs',
  nextjs: 'nextdotjs',
  mongodb: 'mongodb',
  jwt: 'jsonwebtokens',
  kafka: 'apachekafka',
  copilot: 'githubcopilot',
  githubcopilot: 'githubcopilot',
  claude: 'claude',
  langchain: 'langchain',
  openai: 'openai',
  'openai api': 'openai',
  'azure openai': 'openai',
  chatgpt: 'openai',
  cursor: 'cursor',
  'cursor ai': 'cursor',
};

function normalizeToken(t: string): string {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9+#. ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripVersionSuffix(s: string): string {
  return s.replace(/\s+\d+(\.\d+)*$/u, '').trim();
}

function slugFromLabel(label: string): string | undefined {
  const raw = normalizeToken(label);
  if (!raw) {
    return undefined;
  }

  const variants = new Set<string>();
  variants.add(raw);
  variants.add(stripVersionSuffix(raw));
  variants.add(raw.replace(/\./g, ''));
  variants.add(raw.replace(/\s+/g, ''));

  for (const key of variants) {
    if (SLUG_BY_KEY[key]) {
      return SLUG_BY_KEY[key];
    }
  }

  const parts = raw
    .split(/[/&,+]/)
    .map((p) => p.replace(/\([^)]*\)/g, ' ').trim())
    .filter(Boolean);

  for (const part of parts) {
    const partStripped = stripVersionSuffix(part);
    for (const candidate of [part, partStripped, part.replace(/\./g, ''), part.replace(/\s+/g, '')]) {
      if (SLUG_BY_KEY[candidate]) {
        return SLUG_BY_KEY[candidate];
      }
    }
    const tokens = part.split(/\s+/);
    for (const tok of tokens) {
      if (SLUG_BY_KEY[tok]) {
        return SLUG_BY_KEY[tok];
      }
      const ts = stripVersionSuffix(tok);
      if (SLUG_BY_KEY[ts]) {
        return SLUG_BY_KEY[ts];
      }
    }
  }

  const first = raw.split(/\s+/)[0];
  if (SLUG_BY_KEY[first]) {
    return SLUG_BY_KEY[first];
  }

  return undefined;
}

/**
 * URL do ícone (SVG colorido) ou undefined.
 */
export function getTechIconUrl(label: string): string | undefined {
  if (!label?.trim()) {
    return undefined;
  }
  const slug = slugFromLabel(label);
  if (!slug) {
    return undefined;
  }

  const directUrl = DIRECT_URL_BY_SLUG[slug];
  if (directUrl) {
    return directUrl;
  }

  const devPath = DEVICON_FILE_BY_SLUG[slug];
  if (devPath) {
    return `${DEVICON_BASE}/${devPath}`;
  }

  const cdnSlug = SLUG_FOR_COLORED_CDN[slug] || slug;
  const hex = HEX_BY_SLUG[cdnSlug];
  if (!hex) {
    return undefined;
  }

  return `${COLORED_SI_CDN}/${cdnSlug}/${hex}`;
}

/**
 * Conceitos sem logotipo de marca oficial → ícone PrimeIcons representativo.
 * Usado como fallback quando `getTechIconUrl` não encontra um logotipo real.
 */
const CONCEPT_ICON_RULES: Array<{ test: RegExp; icon: string }> = [
  { test: /cqrs|event[-\s]?driven/i, icon: 'pi pi-sync' },
  { test: /microservi/i, icon: 'pi pi-share-alt' },
  { test: /design patterns?/i, icon: 'pi pi-clone' },
  { test: /scrum|kanban|agile/i, icon: 'pi pi-table' },
  { test: /observabilidade|serilog|monitor/i, icon: 'pi pi-chart-line' },
  { test: /mcp|model context protocol|ai agents?/i, icon: 'pi pi-sitemap' },
  { test: /prompt engineering|\brag\b|retrieval/i, icon: 'pi pi-comments' },
];

export function getConceptIconClass(label: string): string | undefined {
  if (!label?.trim()) {
    return undefined;
  }
  const rule = CONCEPT_ICON_RULES.find((r) => r.test.test(label));
  return rule?.icon;
}

export function techIconAlt(name: string): string {
  return `Logótipo ${name}`;
}
