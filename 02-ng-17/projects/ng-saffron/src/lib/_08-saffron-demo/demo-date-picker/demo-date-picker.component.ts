import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { default as jalaliMoment } from 'jalali-moment';
import { SaffronDataType } from '../../_18-saffron-models/saffron-data-type';

@Component({
  selector: 'demo-date-picker',
  templateUrl: './demo-date-picker.component.html',
  styleUrls: ['./demo-date-picker.component.scss'],
})
export class DemoDatePicker {
  placeHolder: string = 'تاریخ';
  placeHolderRange: string = 'بازه زمانی';
  formGroup!: FormGroup;
  selectedDate!: string;
  selectedDate2!: string;
  SaffronDataType = SaffronDataType;
  startDateString = '';
  endDateString = '';

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      myDate: [jalaliMoment(), Validators.required],
      myDateRequired: [null, Validators.required],
      startRange: [jalaliMoment(), Validators.required],
      endRange: [jalaliMoment().add(3, 'day'), Validators.required],
    });

    this.selectedDate =
      (this.formGroup.get('myDate')?.value?._d as Date)?.toLocaleDateString(
        'fa-IR'
      ) ?? undefined;

    this.startDateString =
      (this.formGroup.get('startRange')?.value?._d as Date)?.toLocaleDateString(
        'fa-IR'
      ) ?? undefined;
    this.endDateString =
      (this.formGroup.get('endRange')?.value?._d as Date)?.toLocaleDateString(
        'fa-IR'
      ) ?? undefined;

    this.formGroup.get('myDate')?.valueChanges.subscribe((value: any) => {
      this.selectedDate =
        (value?._d as Date)?.toLocaleDateString('fa-IR') ?? undefined;
    });

    this.formGroup.get('myDateRequired')?.markAllAsTouched();

    this.formGroup
      .get('myDateRequired')
      ?.valueChanges.subscribe((value: any) => {
        this.selectedDate2 =
          (value?._d as Date)?.toLocaleDateString('fa-IR') ?? undefined;
      });

    this.formGroup.get('startRange')?.valueChanges.subscribe((value: any) => {
      this.startDateString =
        (value?._d as Date)?.toLocaleDateString('fa-IR') ?? undefined;
    });

    this.formGroup.get('endRange')?.valueChanges.subscribe((value: any) => {
      this.endDateString =
        (value?._d as Date)?.toLocaleDateString('fa-IR') ?? undefined;
    });
  }

  enterPressed() {
    //alert('enter pressed');
  }
}
