import { SkillLevel } from './portfolio.model';

export function severityForLevel(level?: string): 'success' | 'info' | 'warning' | 'secondary' {
  switch (level) {
    case 'advanced':
      return 'success';
    case 'intermediate':
      return 'info';
    case 'basic':
      return 'warning';
    default:
      return 'secondary';
  }
}

export function skillLevelLabel(level: SkillLevel | string): string {
  if (level === 'advanced') return 'Avançado';
  if (level === 'intermediate') return 'Intermédio';
  return 'Base';
}

/** Converte nível em percentagem quando `skill.percent` não está definido. */
export function levelToPercent(level?: SkillLevel): number {
  switch (level) {
    case 'advanced':
      return 92;
    case 'intermediate':
      return 78;
    case 'basic':
      return 55;
    default:
      return 0;
  }
}

export function skillPercent(skill: { percent?: number; level?: SkillLevel }): number {
  if (skill.percent != null && skill.percent >= 0) {
    return Math.min(100, skill.percent);
  }
  return levelToPercent(skill.level);
}

/**
 * Iniciais (1-2 letras) a partir de um nome/rótulo, para usar como fallback visual
 * quando não há logótipo/foto disponível.
 * @param stripParens remove texto entre parênteses antes de calcular as iniciais.
 */
export function computeInitials(text: string, stripParens = false): string {
  const cleaned = stripParens ? text.replace(/\([^)]*\)/g, '') : text;
  const parts = cleaned.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return '?';
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}
