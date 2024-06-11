import {
  FormGroup,
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

import { default as jalaliMoment } from 'jalali-moment';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import {
  SaffronPersianDateAdapter,
  PERSIAN_DATE_FORMATS,
} from '../_27-saffron-utils/adapters/saffron-material.persian-date.adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SaffronInputErrorComponent } from '../_29-saffron-input-error/saffron-input-error.component';
import { SaffronInputLabelComponent } from '../_30-saffron-input-label/saffron-input-label.component';

@Component({
  selector: 'saffron-date-picker',
  templateUrl: './saffron-date-picker.component.html',
  styleUrls: ['./saffron-date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    SaffronInputErrorComponent,
    SaffronInputLabelComponent,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: SaffronPersianDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
  ],
})
export class SaffronDatePickerComponent implements OnChanges {
  @Input() formGroup!: FormGroup;
  @Input() controlName = '';
  @Input() placeholder: string = '';

  @Input() isRangePicker: boolean = false;
  @Input() rangeStartControlName = '';
  @Input() rangeEndControlName = '';
  @Input() max!: jalaliMoment.Moment;

  @Input() min!: jalaliMoment.Moment;

  control!: AbstractControl;
  currentValue!: Date;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setControl(changes);
  }

  private setControl(changes: SimpleChanges) {
    if (changes['formGroup'] || changes['controlName']) {
      this.control = this.formGroup.controls[this.controlName];

      this.control.valueChanges.subscribe((momentValue: any) => {
        this.currentValue = momentValue?._d;
      });
    }
  }

  blurred() {
    this.control.markAsTouched();
  }

  onKey(event: any) {
    const inputText = event.currentTarget.value;
    if (
      inputText.length === 8 &&
      !(inputText.includes('/') || inputText.includes('-'))
    ) {
      this.control.setValue(
        new Date(
          inputText.substring(0, 2) +
            '/' +
            inputText.substring(2, 4) +
            '/' +
            inputText.substring(4, 8)
        )
      );
    }
  }
}
