import { FormGroup, AbstractControl } from '@angular/forms';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sdc-range-picker',
  templateUrl: './sdc-range-picker.component.html',
  styleUrls: ['./sdc-range-picker.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None,
})
export class SdcRangePickerComponent implements OnChanges {
  @Input() formGroup!: FormGroup;
  @Input() startControlName = '';
  @Input() endControlName = '';
  @Input() placeholder: string = '';

  control!: AbstractControl;
  startTitle = 'تاریخ شروع';
  endTitle = 'تاریخ پایان';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setControl(changes);
  }

  private setControl(changes: SimpleChanges) {
    if (
      changes['formGroup'] ||
      changes['startControlName'] ||
      changes['endControlName']
    ) {
      this.control = this.formGroup.controls[this.startControlName];
    }
  }

  blurred() {
    this.control.markAsTouched();
  }
}
