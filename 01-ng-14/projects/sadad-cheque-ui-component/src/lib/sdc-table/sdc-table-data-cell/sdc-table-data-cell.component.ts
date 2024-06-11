import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SdcActionColumnData } from '../models/sdc-action-column-data';
import { SdcActionColumnEvent } from '../models/sdc-action-column-event';
import { SdcColumnType } from '../models/sdc-column-type';

@Component({
  selector: 'sdc-table-data-cell',
  templateUrl: './sdc-table-data-cell.component.html',
  styleUrls: ['./sdc-table-data-cell.component.scss'],
})
export class SdcTableDataCellComponent<T> {
  @Input()
  public data!: T | any;

  @Input()
  columnType!: number;

  @Input()
  actionColumnData?: SdcActionColumnData[];

  @Input()
  isDataClickable?: boolean;

  @Output()
  public actionClicked = new EventEmitter<SdcActionColumnData>();

  @Output()
  public dataClicked = new EventEmitter<void>();

  SdcColumnType = SdcColumnType;

  constructor() {}

  onActionClicked(actionColumnData: SdcActionColumnData) {
    this.actionClicked.emit(actionColumnData);
  }

  onDataClick() {
    //column: SdcTableColumn, row: T, rowIndex: number
    //clickData(column,rows[rowIndex],rowIndex)"
    if (this.isDataClickable) {
      this.dataClicked.emit();
    }
  }
}
