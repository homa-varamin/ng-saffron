import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable, map, of, startWith, tap } from 'rxjs';
import { SaffronAutoCompleteModel } from './models/saffron-auto-complete.model';
import { MatOption } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SaffronInputLabelComponent } from '../_30-saffron-input-label/saffron-input-label.component';
import { SaffronInputErrorComponent } from '../_29-saffron-input-error/saffron-input-error.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'saffron-auto-complete',
  templateUrl: './saffron-auto-complete.component.html',
  styleUrls: ['./saffron-auto-complete.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    SaffronInputLabelComponent,
    SaffronInputErrorComponent,
    MatInputModule
  ],
})
export class SaffronAutoCompleteComponent implements OnChanges {
  @Input()
  formGroup!: FormGroup;

  @Input()
  controlName = '';

  @Input()
  options: SaffronAutoCompleteModel[] = [];

  @Input()
  placeHolder!: string;

  defaultText = 'گزینه مورد نظر را انتخاب نمایید';
  internalFormGroup!: FormGroup;
  filteredOptions!: Observable<SaffronAutoCompleteModel[]>;
  control!: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.internalFormGroup = this.fb.group({
      searchInput: [null],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setControl(changes);

    if (this.formGroup && this.controlName) {
      this.filteredOptions =
        this.internalFormGroup.get('searchInput')?.valueChanges.pipe(
          tap(() => {
            this.formGroup.get(this.controlName)?.setValue(undefined);
          }),
          startWith(''),
          map((value) => this._filter(value || ''))
        ) ?? of([]);

      this.setDefault();
    }
  }

  private setControl(changes: SimpleChanges) {
    if (changes['formGroup'] || changes['controlName']) {
      this.control = this.formGroup.controls[this.controlName];
    }
  }

  async setDefault() {
    const value = `${this.formGroup.value[this.controlName]}`;
    const option = this.options.find(
      (x) => x.value === value
    ) as SaffronAutoCompleteModel;

    if (option) {
      this.internalFormGroup.get('searchInput')?.setValue(option.title);
      this.formGroup.get(this.controlName)?.setValue(option.value);
    }
  }

  optionSelected(matOption: MatOption) {
    this.formGroup.get(this.controlName)?.setValue(matOption.id);
  }

  private _filter(filterValue: string): SaffronAutoCompleteModel[] {
    filterValue = filterValue.toLowerCase();

    return this.options.filter((option) =>
      option.title.toLowerCase().includes(filterValue)
    );
  }
}
