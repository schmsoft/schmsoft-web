import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ssw-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss'],
})
export class PortfolioFormComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  portfolio: any;
  constructor() {}
}
