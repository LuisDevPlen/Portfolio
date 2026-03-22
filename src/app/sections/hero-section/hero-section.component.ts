import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';
import { getTechIconUrl, techIconAlt } from '../../utils/tech-icons';

export interface HeroTechIcon {
  name: string;
  url: string;
}

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  @Input() profile!: Profile;

  /** Logótipos a partir de `roleTags` (Angular, Java, Docker, …). */
  get stackTechIcons(): HeroTechIcon[] {
    const tags = this.profile?.roleTags || [];
    const out: HeroTechIcon[] = [];
    const seenUrl = new Set<string>();
    for (const name of tags) {
      const url = getTechIconUrl(name);
      if (url && !seenUrl.has(url)) {
        seenUrl.add(url);
        out.push({ name, url });
      }
    }
    return out;
  }

  techAlt(name: string): string {
    return techIconAlt(name);
  }

  get initials(): string {
    const parts = (this.profile?.fullName || '').trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) {
      return '?';
    }
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    const first = parts[0].charAt(0);
    const last = parts[parts.length - 1].charAt(0);
    return (first + last).toUpperCase();
  }

  scrollTo(ev: Event, id: string): void {
    ev.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
