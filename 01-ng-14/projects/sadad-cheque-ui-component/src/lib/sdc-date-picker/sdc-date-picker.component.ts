import { FormGroup, AbstractControl } from '@angular/forms';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

import { default as jalaliMoment } from 'jalali-moment';

@Component({
  selector: 'sdc-date-picker',
  templateUrl: './sdc-date-picker.component.html',
  styleUrls: ['./sdc-date-picker.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None,
})
export class SdcDatePickerComponent implements OnChanges {
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
