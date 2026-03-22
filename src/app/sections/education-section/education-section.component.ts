import { Component, Input } from '@angular/core';
import { EducationItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
})
export class EducationSectionComponent {
  @Input() education!: EducationItem[];
}
