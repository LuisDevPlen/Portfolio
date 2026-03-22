import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../models/portfolio.model';
import { getTechIconUrl, techIconAlt } from '../../utils/tech-icons';

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

  /** Logos para o cabeçalho do acordeão (stack visual). */
  categoryTechPreview(group: SkillCategory, max = 5): TechPreview[] {
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
    const t = skillName.replace(/\([^)]*\)/g, '').trim();
    const parts = t.split(/\s+/).filter(Boolean);
    if (parts.length === 0) {
      return '?';
    }
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
}
