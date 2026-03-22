import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

const LINK_ID = 'primeng-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  /** Sempre tema claro: ignora sistema, armazenamento local e não expõe modo escuro. */
  init(): void {
    this.doc.documentElement.classList.remove('theme-dark');

    let link = this.doc.getElementById(LINK_ID) as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.id = LINK_ID;
      link.rel = 'stylesheet';
      this.doc.head.appendChild(link);
    }
    const baseHref = this.doc.querySelector('base')?.getAttribute('href') || '/';
    const pathPrefix =
      baseHref === '/' || baseHref === '' ? '' : baseHref.replace(/\/$/, '');
    link.href = pathPrefix
      ? `${pathPrefix}/themes/light/theme.css`
      : `/themes/light/theme.css`;
  }
}
