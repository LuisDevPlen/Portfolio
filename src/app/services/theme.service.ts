import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'portfolio-theme';
const LINK_ID = 'primeng-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly darkSubject = new BehaviorSubject(false);
  readonly dark$ = this.darkSubject.asObservable();

  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  get isDark(): boolean {
    return this.darkSubject.value;
  }

  init(): void {
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const dark = saved === 'dark' || (saved !== 'light' && !!prefersDark);
    this.setDark(dark);
  }

  toggle(): void {
    this.setDark(!this.darkSubject.value);
  }

  setDark(dark: boolean): void {
    this.darkSubject.next(dark);
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
    this.doc.documentElement.classList.toggle('theme-dark', dark);

    let link = this.doc.getElementById(LINK_ID) as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.id = LINK_ID;
      link.rel = 'stylesheet';
      this.doc.head.appendChild(link);
    }
    const baseHref = this.doc.querySelector('base')?.getAttribute('href') || '/';
    const pathPrefix =
      baseHref === '/' || baseHref === ''
        ? ''
        : baseHref.replace(/\/$/, '');
    link.href = pathPrefix
      ? `${pathPrefix}/themes/${dark ? 'dark' : 'light'}/theme.css`
      : `/themes/${dark ? 'dark' : 'light'}/theme.css`;
  }
}
