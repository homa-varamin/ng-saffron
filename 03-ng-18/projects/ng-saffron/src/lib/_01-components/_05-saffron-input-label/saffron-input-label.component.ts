import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SaffronInputErrorComponent } from '../_04-saffron-input-error/saffron-input-error.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'saffron-input-label',
  templateUrl: './saffron-input-label.component.html',
  styleUrls: ['./saffron-input-label.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SaffronInputErrorComponent,
  ],
})
export class SaffronInputLabelComponent {
  @Input() control?: AbstractControl;
  @Input() placeholder: string = '';

  Validators = Validators;
}
