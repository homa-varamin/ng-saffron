import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  AdvancedFilterModel,
  SdcButtonTypes,
  SdcModalButton,
} from '../../models/models.module';
import { MatDialogConfig } from '@angular/material/dialog';
import { AdvancedFilterInputTypes } from '../models/sdc-advanced-filter-input-types';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sdc-advanced-filter-modal',
  templateUrl: './sdc-advanced-filter-modal.component.html',
  styleUrls: ['./sdc-advanced-filter-modal.component.scss'],
})
export class SdcAdvancedFilterModalComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() set openModal(value: boolean) {
    if (this._openModal === value) {
      return;
    }

    this._openModal = value;
    this.openModalChange.emit(value);
  }

  get openModal() {
    return this._openModal;
  }

  @Input() secondryFilters: AdvancedFilterModel[] = [];
  @Output() openModalChange = new EventEmitter<boolean>();

  customButtons: SdcModalButton[] = [
    {
      id: '1',
      action: () => {
        this.onModalAccept();
      },
      title: 'اعمال جستجو',
      buttonType: SdcButtonTypes.Primary,
    },
    {
      id: '2',
      action: () => {
        this.onModalCancel();
      },
      title: 'انصراف',
      buttonType: SdcButtonTypes.Basic,
    },
  ];

  config: MatDialogConfig = {
    disableClose: true,
    autoFocus: false,
    width: '80%',
  };
  inputTypes = AdvancedFilterInputTypes;

  private _openModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onModalAccept() {
    //this.setChipsList();
    this.openModal = false;
  }

  onModalCancel() {
    this.openModal = false;
  }
}
