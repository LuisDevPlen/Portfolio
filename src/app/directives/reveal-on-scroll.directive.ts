import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Adiciona a classe `is-visible` (configurável) a um elemento quando este
 * entra no viewport, uma única vez ("one-shot reveal"). Usa IntersectionObserver
 * com fallback síncrono (visível de imediato) quando indisponível ou quando o
 * utilizador prefere motion reduzido.
 */
@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  /** Classe aplicada quando o elemento entra em vista. */
  @Input() revealClass = 'is-visible';
  /** Fração do elemento visível necessária para disparar o reveal. */
  @Input() revealThreshold = 0.15;
  /** Atraso adicional (ms) — útil para escalonar grelhas via CSS nth-child também é suportado. */
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal-on-scroll');

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      node.classList.add(this.revealClass);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (this.revealDelay > 0) {
              setTimeout(() => node.classList.add(this.revealClass), this.revealDelay);
            } else {
              node.classList.add(this.revealClass);
            }
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: this.revealThreshold, rootMargin: '0px 0px -8% 0px' },
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
