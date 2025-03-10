import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, of, startWith, tap } from 'rxjs';
import { MatOption } from '@angular/material/core';
import { SdcAutoCompleteModel } from '../sdc-auto-complete/models/sdc-auto-complete.model';

@Component({
  selector: 'legacy-auto-complete',
  templateUrl: './legacy-auto-complete.component.html',
  styleUrls: ['./legacy-auto-complete.component.scss'],
})
export class LegacyAutoCompleteComponent implements OnChanges {
  @Input()
  formGroup!: FormGroup;

  @Input()
  controlName = '';

  @Input()
  options: SdcAutoCompleteModel[] = [];

  @Input()
  placeHolder!: string;

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
    const id = `${this.formGroup.value[this.controlName]}`;
    const option = this.options.find(
      (x) => x.value === id
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
