import { AfterViewInit, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaffronButtonTypes } from '../../_01-components/_03-saffron-button/models/saffron-button-types';
import { SaffronDataType } from '../../_01-components/_02-models/saffron-data-type';
import { CommonModule } from '@angular/common';
import { SaffronInputComponent } from '../../_01-components/_01-saffron-input/saffron-input.component';
import { SaffronFieldsetDirective } from '../directives/fieldset-directive/fieldset.directive';
import { SaffronTooltipComponent } from '../../_01-components/_26-saffron-tooltip/saffron-tooltip.component';
import { SaffronButtonComponent } from '../../_01-components/_03-saffron-button/saffron-button.component';
@Component({
  selector: 'demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss'],
  imports: [CommonModule, SaffronInputComponent, SaffronFieldsetDirective, SaffronTooltipComponent, SaffronButtonComponent],
  standalone: true
})
export class DemoInput implements AfterViewInit {
  accountNumber: string = 'شماره حساب';
  nationalCodeTitle: string = 'شماره ملی';
  nameTitle: string = 'نام';
  amountTitle: string = 'مبلغ چک';
  formGroup!: FormGroup;
  SaffronButtonTypes = SaffronButtonTypes;
  SaffronDataType = SaffronDataType;

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
    const listOfInputs = document.getElementsByClassName('input-of-saffron');
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
