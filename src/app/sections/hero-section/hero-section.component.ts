import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';
import { computeInitials, whatsappLink } from '../../models/portfolio.utils';
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
    return computeInitials(this.profile?.fullName || '');
  }

  get whatsappUrl(): string | null {
    return whatsappLink(this.profile?.phone);
  }

  scrollTo(ev: Event, id: string): void {
    ev.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
