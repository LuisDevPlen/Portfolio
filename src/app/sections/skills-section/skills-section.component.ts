import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../models/portfolio.model';
import { computeInitials } from '../../models/portfolio.utils';
import { getTechIconUrl, techIconAlt, getConceptIconClass } from '../../utils/tech-icons';

/** Máximo de logótipos mostrados no cabeçalho do acordeão de cada categoria. */
const DEFAULT_TECH_PREVIEW_LIMIT = 5;

export interface TechPreview {
  name: string;
  url: string;
}

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
})
export class SkillsSectionComponent {
  @Input() categories!: SkillCategory[];
  @Input() skillsIntro?: string;

  techUrl(name: string): string | undefined {
    return getTechIconUrl(name);
  }

  techAlt(name: string): string {
    return techIconAlt(name);
  }

  conceptIcon(name: string): string | undefined {
    return getConceptIconClass(name);
  }

  /** Logos para o cabeçalho do acordeão (stack visual). */
  categoryTechPreview(group: SkillCategory, max = DEFAULT_TECH_PREVIEW_LIMIT): TechPreview[] {
    const out: TechPreview[] = [];
    for (const s of group.skills || []) {
      const url = getTechIconUrl(s.name);
      if (url) {
        out.push({ name: s.name, url });
      }
      if (out.length >= max) {
        break;
      }
    }
    return out;
  }

  initials(skillName: string): string {
    return computeInitials(skillName, true);
  }
}
