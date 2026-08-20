import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PROFILE } from './data/portfolio.data';
import { ThemeService } from './services/theme.service';

interface NavLink {
  label: string;
  id: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();
  readonly navLinks: NavLink[] = [
    { label: 'Início', id: 'inicio', icon: 'pi pi-home' },
    { label: 'Sobre', id: 'sobre', icon: 'pi pi-user' },
    { label: 'Experiência', id: 'experiencia', icon: 'pi pi-briefcase' },
    { label: 'Projetos', id: 'projetos', icon: 'pi pi-folder-open' },
    { label: 'Competências', id: 'skills', icon: 'pi pi-bolt' },
    { label: 'Empresas', id: 'empresas', icon: 'pi pi-building' },
    { label: 'Formação', id: 'formacao', icon: 'pi pi-book' },
    { label: 'Contatos', id: 'contato', icon: 'pi pi-id-card' },
  ];

  mobileNavOpen = false;
  scrolled = false;
  isMobileNav = false;
  activeSectionId = '';

  private sectionObserver?: IntersectionObserver;

  constructor(private readonly theme: ThemeService) {}

  ngOnInit(): void {
    this.theme.init();
    this.updateMobileNavFlag();
    this.setupSectionObserver();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  private setupSectionObserver(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }
    const sections = this.navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) {
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          this.activeSectionId = visible[0].target.id;
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((el) => this.sectionObserver!.observe(el));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 8;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateMobileNavFlag();
    if (!this.isMobileNav) {
      this.mobileNavOpen = false;
    }
  }

  private updateMobileNavFlag(): void {
    this.isMobileNav = typeof window !== 'undefined' && window.innerWidth < 960;
  }

  scrollTo(id: string): void {
    this.mobileNavOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
