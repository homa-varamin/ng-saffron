import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { SaffronInputErrorComponent } from '../_29-saffron-input-error/saffron-input-error.component';
import { SaffronInputLabelComponent } from '../_30-saffron-input-label/saffron-input-label.component';

@Component({
  selector: 'saffron-text-area',
  templateUrl: './saffron-text-area.component.html',
  styleUrls: ['./saffron-text-area.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatError,
    SaffronInputErrorComponent,
    SaffronInputLabelComponent,
  ],
})
export class SaffronTextAreaComponent implements OnChanges {
  @Input() formGroup!: FormGroup;
  @Input() controlName = '';
  @Input() placeholder: string = '';
  @Input('rows') rows: number = 3;

  control!: AbstractControl;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.setControl(changes);
  }

  private setControl(changes: SimpleChanges) {
    if (changes['formGroup'] || changes['controlName']) {
      this.control = this.formGroup.controls[this.controlName];
    }
  }
}
