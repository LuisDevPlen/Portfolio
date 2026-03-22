import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
})
export class ProjectsSectionComponent {
  @Input() projects!: ProjectItem[];
  /** Repositório por omissão quando o projeto não tem `githubUrl`. */
  @Input() fallbackGithubUrl?: string;

  codeUrl(p: ProjectItem): string | null {
    const u = p.githubUrl?.trim();
    if (u) {
      return u;
    }
    return this.fallbackGithubUrl?.trim() || null;
  }
}
