import { Component, Input } from '@angular/core';
import { CompanyWorked } from '../../models/portfolio.model';

@Component({
  selector: 'app-companies-section',
  templateUrl: './companies-section.component.html',
})
export class CompaniesSectionComponent {
  @Input() companies!: CompanyWorked[];
}
