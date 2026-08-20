import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio.model';
import { whatsappLink } from '../../models/portfolio.utils';

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

  get telLink(): string | null {
    const phone = this.profile?.phone;
    if (!phone?.trim()) {
      return null;
    }
    const digits = phone.replace(/\D/g, '');
    return digits ? `tel:+${digits.startsWith('55') ? digits : '55' + digits}` : null;
  }

  /** Abre conversa no WhatsApp (app ou web). */
  get whatsappLink(): string | null {
    return whatsappLink(this.profile?.phone);
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
