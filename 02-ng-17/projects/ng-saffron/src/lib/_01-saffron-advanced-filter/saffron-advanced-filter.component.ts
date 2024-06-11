import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { SaffronAdvancedFilterModel } from './models/saffron-advanced-filter.model';
import { SaffronAdvancedFilterChips } from './models/saffron-advanced-filter-chips';
import { AdvancedFilterInputTypes } from './models/saffron-advanced-filter-input-types';
import { SaffronDataType } from '../_18-saffron-models/saffron-data-type';
import { SaffronButtonTypes } from '../_03-saffron-button/models/saffron-button-types';
import { CommonModule } from '@angular/common';
import { SaffronAdvancedFilterModalComponent } from './saffron-advanced-filter-modal/saffron-advanced-filter-modal.component';
import { SaffronInputComponent } from '../_12-saffron-input/saffron-input.component';
import { SaffronButtonComponent } from '../_03-saffron-button/saffron-button.component';
import { SaffronChipsComponent } from '../_05-saffron-chips/saffron-chips.component';
import { SaffronChipsModel } from '../_05-saffron-chips/models/saffron-chips.model';

@Component({
  selector: 'saffron-advanced-filter',
  templateUrl: './saffron-advanced-filter.component.html',
  styleUrls: ['./saffron-advanced-filter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SaffronAdvancedFilterModalComponent,
    SaffronInputComponent,
    SaffronButtonComponent,
    SaffronChipsComponent,
  ],
})
export class SaffronAdvancedFilterComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() primaryFilters: SaffronAdvancedFilterModel[] = [];
  @Input() secondryFilters: SaffronAdvancedFilterModel[] = [];

  @Output() searched = new EventEmitter<void>();

  SaffronDataType = SaffronDataType;
  SaffronButtonTypes = SaffronButtonTypes;
  inputTypes = AdvancedFilterInputTypes;
  chipList: SaffronAdvancedFilterChips[] = [];
  maxPrimaryFilters = 4;
  openModal = false;

  constructor() {}

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.setChipsList();
  }

  setChipsList() {
    this.chipList = [];

    if (!this.formGroup) {
      return;
    }

    const primaryFilters = this.primaryFilters.slice(0, this.maxPrimaryFilters);
    const allFilters = [...primaryFilters, ...this.secondryFilters];

    allFilters.forEach((filter) => {
      const filterValue = this.formGroup.value[filter.controlName];
      if (filterValue != undefined) {
        this.chipList.push({
          title: filter.title,
          id: filter.id,
          controlName: filter.controlName,
        });
      }
    });
  }

  onChipRemove(chip: SaffronChipsModel) {
    const chipToRemove = this.chipList.find((x) => x.id === chip.id);

    if (!chipToRemove) {
      return;
    }

    this.chipList = this.chipList.filter((x) => x != chipToRemove);
    const formControl = this.formGroup.get(chipToRemove.controlName);

    if (formControl) {
      formControl.setValue(undefined);
    }
  }

  onSearch() {
    this.searched.emit();
  }
}
