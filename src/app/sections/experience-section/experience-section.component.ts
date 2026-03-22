import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
})
export class ExperienceSectionComponent {
  @Input() experiences!: ExperienceItem[];
}
