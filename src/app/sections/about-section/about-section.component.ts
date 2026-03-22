import { Component, Input, OnChanges } from '@angular/core';
import { AboutFeatureCard, ProfileHighlight } from '../../models/portfolio.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
})
export class AboutSectionComponent implements OnChanges {
  @Input() summary!: string;
  @Input() fullName!: string;
  @Input() photoUrl?: string;
  @Input() aboutParagraphs?: string[];
  @Input() aboutFeatures?: AboutFeatureCard[];
  @Input() highlights?: ProfileHighlight[];

  paragraphs: string[] = [];
  features: AboutFeatureCard[] = [];

  ngOnChanges(): void {
    this.paragraphs = this.aboutParagraphs?.length
      ? this.aboutParagraphs
      : this.summary?.trim()
        ? [this.summary.trim()]
        : [];
    this.features = this.buildFeatures();
  }

  private buildFeatures(): AboutFeatureCard[] {
    if (this.aboutFeatures?.length) {
      return this.aboutFeatures;
    }
    return (this.highlights || []).map((h) => ({
      title: h.label,
      description: h.detail ?? String(h.value),
      icon: h.icon,
    }));
  }
}
