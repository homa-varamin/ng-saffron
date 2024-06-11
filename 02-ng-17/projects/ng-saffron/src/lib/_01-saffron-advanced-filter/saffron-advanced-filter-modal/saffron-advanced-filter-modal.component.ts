import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { AdvancedFilterInputTypes } from '../models/saffron-advanced-filter-input-types';
import { FormGroup, FormsModule } from '@angular/forms';
import { SaffronAdvancedFilterModel } from '../models/saffron-advanced-filter.model';
import { SaffronModalButton } from '../../_17-saffron-modal/models/saffron-modal-button';
import { SaffronButtonTypes } from '../../_03-saffron-button/models/saffron-button-types';
import { CommonModule } from '@angular/common';
import { SaffronInputComponent } from '../../_12-saffron-input/saffron-input.component';
import { SaffronModalComponent } from '../../_17-saffron-modal/saffron-modal.component';

@Component({
  selector: 'saffron-advanced-filter-modal',
  templateUrl: './saffron-advanced-filter-modal.component.html',
  styleUrls: ['./saffron-advanced-filter-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SaffronInputComponent,
    SaffronModalComponent,
  ],
})
export class SaffronAdvancedFilterModalComponent implements OnInit {
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

  @Input() secondryFilters: SaffronAdvancedFilterModel[] = [];
  @Output() openModalChange = new EventEmitter<boolean>();

  customButtons: SaffronModalButton[] = [
    {
      id: '1',
      action: () => {
        this.onModalAccept();
      },
      title: 'اعمال جستجو',
      buttonType: SaffronButtonTypes.Primary,
    },
    {
      id: '2',
      action: () => {
        this.onModalCancel();
      },
      title: 'انصراف',
      buttonType: SaffronButtonTypes.Basic,
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
