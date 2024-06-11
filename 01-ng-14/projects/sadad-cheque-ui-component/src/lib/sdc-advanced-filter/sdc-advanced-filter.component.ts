import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdvancedFilterModel } from './models/advanced-filter.model';
import { SdcDataType } from '../models/sdc-data-type';
import { SdcButtonTypes, SdcModalButton } from '../models/models.module';
import { SdcAdvancedFilterChips } from './models/sdc-advanced-filter-chips';
import { MatDialogConfig } from '@angular/material/dialog';
import { AdvancedFilterInputTypes } from './models/sdc-advanced-filter-input-types';

@Component({
  selector: 'sdc-advanced-filter',
  templateUrl: './sdc-advanced-filter.component.html',
  styleUrls: ['./sdc-advanced-filter.component.scss'],
})
export class SdcAdvancedFilterComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() primaryFilters: AdvancedFilterModel[] = [];
  @Input() secondryFilters: AdvancedFilterModel[] = [];

  @Output() searched = new EventEmitter<void>();

  SdcDataType = SdcDataType;
  SdcButtonTypes = SdcButtonTypes;
  inputTypes = AdvancedFilterInputTypes;
  chipList: SdcAdvancedFilterChips[] = [];
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

  onChipRemove(chip: SdcAdvancedFilterChips) {
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
