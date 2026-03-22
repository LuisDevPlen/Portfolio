import { Component, HostListener, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
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

  constructor(private readonly theme: ThemeService) {}

  ngOnInit(): void {
    this.theme.init();
    this.updateMobileNavFlag();
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
