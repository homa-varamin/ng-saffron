import { AfterViewInit, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SdcButtonTypes } from '../../models/models.module';
import { SdcDataType } from '../../models/sdc-data-type';
@Component({
  selector: 'demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss'],
})
export class DemoInput implements AfterViewInit {
  accountNumber: string = 'شماره حساب';
  nationalCodeTitle: string = 'شماره ملی';
  nameTitle: string = 'نام';
  amountTitle: string = 'مبلغ چک';
  formGroup!: FormGroup;
  SdcButtonTypes = SdcButtonTypes;
  SdcDataType = SdcDataType;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      serialNumber: [
        undefined,
        [Validators.required, Validators.minLength(2), Validators.maxLength(12)],
      ],
      amount: ['1000000'],
      branchName: ['', Validators.required],
      serialNumberDirty: ['', Validators.required],
      nestedFormExample: this.fb.array([]),
    });

    this.addFormArray();
    this.formGroup.get('serialNumberDirty')?.markAllAsTouched();
    (window as any).DemoInput = this;
  }

  get nestedFormControls() {
    return (this.formGroup.controls['nestedFormExample'] as FormArray)
      .controls as FormGroup[];
  }

  ngAfterViewInit(): void {
    const listOfInputs = document.getElementsByClassName('input-of-sdc');
    (listOfInputs[0] as HTMLInputElement)?.focus();
  }

  addFormArray() {
    const formArray = this.fb.group({
      name: ['', Validators.required],
      nationalCode: ['', Validators.required],
    });

    this.nestedFormControls.push(formArray);
  }

  enterPressed() {
    //alert('enter pressed');
  }

  onSearch() {
    console.log('search-clicked');
  }
}
