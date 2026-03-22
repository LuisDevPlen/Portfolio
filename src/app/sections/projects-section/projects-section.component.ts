import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
})
export class ProjectsSectionComponent {
  @Input() projects!: ProjectItem[];
}
