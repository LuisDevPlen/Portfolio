import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';

/** Código de país (Brasil) usado quando o telefone não o inclui já. */
const BR_COUNTRY_CODE = '55';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  @Input() profile!: Profile;

  formName = '';
  formEmail = '';
  formMessage = '';

  get mailtoLink(): string {
    return `mailto:${this.profile.email}`;
  }

  /** Dígitos com código do país (ex.: 5534998087602) para tel e WhatsApp. */
  private phoneDigitsInternational(): string | null {
    const phone = this.profile?.phone;
    if (!phone?.trim()) {
      return null;
    }
    const d = phone.replace(/\D/g, '');
    if (!d) {
      return null;
    }
    return d.startsWith(BR_COUNTRY_CODE) ? d : BR_COUNTRY_CODE + d;
  }

  get telLink(): string | null {
    const intl = this.phoneDigitsInternational();
    return intl ? `tel:+${intl}` : null;
  }

  /** Abre conversa no WhatsApp (app ou web). */
  get whatsappLink(): string | null {
    const intl = this.phoneDigitsInternational();
    return intl ? `https://wa.me/${intl}` : null;
  }

  onSubmit(): void {
    const name = this.formName.trim();
    const email = this.formEmail.trim();
    const message = this.formMessage.trim();
    if (!name || !email || !message) {
      return;
    }
    const subject = encodeURIComponent('Contato via portfólio');
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }
}
