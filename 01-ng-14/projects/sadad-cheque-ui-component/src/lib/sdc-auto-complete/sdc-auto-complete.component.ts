import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, firstValueFrom, map, of, startWith, tap } from 'rxjs';
import { SdcAutoCompleteModel } from './models/sdc-auto-complete.model';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'sdc-auto-complete',
  templateUrl: './sdc-auto-complete.component.html',
  styleUrls: ['./sdc-auto-complete.component.scss'],
})
export class SdcAutoCompleteComponent implements OnChanges {
  @Input()
  formGroup!: FormGroup;

  @Input()
  controlName = '';

  @Input()
  options: SdcAutoCompleteModel[] = [];

  @Input()
  placeHolder!: string;

  defaultText = 'گزینه مورد نظر را انتخاب نمایید';
  internalFormGroup!: FormGroup;
  filteredOptions!: Observable<SdcAutoCompleteModel[]>;
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
    ) as SdcAutoCompleteModel;

    if (option) {
      this.internalFormGroup.get('searchInput')?.setValue(option.title);
      this.formGroup.get(this.controlName)?.setValue(option.value);
    }
  }

  optionSelected(matOption: MatOption) {
    this.formGroup.get(this.controlName)?.setValue(matOption.id);
  }

  private _filter(filterValue: string): SdcAutoCompleteModel[] {
    filterValue = filterValue.toLowerCase();

    return this.options.filter((option) =>
      option.title.toLowerCase().includes(filterValue)
    );
  }
}
