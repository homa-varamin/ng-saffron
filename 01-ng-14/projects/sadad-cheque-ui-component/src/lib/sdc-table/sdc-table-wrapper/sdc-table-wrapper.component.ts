import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SdcActionColumnData } from '../models/sdc-action-column-data';
import { SdcActionColumnEvent } from '../models/sdc-action-column-event';
import { SdcTableColumn } from '../models/sdc-table-column';
import { SdcTableDataClick } from '../models/sdc-table-data-click';
import { SdcTableSortState } from '../models/sdc-table-sort-state';

@Component({
  selector: 'sdc-table-wrapper',
  templateUrl: './sdc-table-wrapper.component.html',
  styleUrls: ['./sdc-table-wrapper.component.scss'],
})
export class SdcTableWrapperComponent<T> implements OnChanges {
  @Input()
  public rows: T[] = [];

  @Input()
  public columns: SdcTableColumn[] = [];

  @Input()
  public stickyHeader: boolean = true;

  @Output()
  public actionClicked = new EventEmitter<SdcActionColumnEvent>();

  @Output()
  public sortStateChanged = new EventEmitter<SdcTableSortState[]>();

  @Output()
  public dataClicked = new EventEmitter<SdcTableDataClick<T>>();

  tableHeaders: string[] = [];
  sortedColumns: SdcTableSortState[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.onColumnChange();
    }
  }

  private onColumnChange() {
    this.tableHeaders = this.columns.map((x) => x.field as string);
    this.resetSort();
  }

  private resetSort() {
    this.sortedColumns = [];
    [...Array(this.columns.length).keys()].forEach(() => {
      this.sortedColumns.push({ asc: false, desc: false });
    });
  }

  onSortStateChange(columnIndex: number, sortState: SdcTableSortState) {
    this.sortedColumns[columnIndex] = sortState;
    this.sortStateChanged.emit(this.sortedColumns);
  }

  onActionClicked(actionColumnData: SdcActionColumnData, rowIndex: number ,rowData:T) {
    this.actionClicked.emit({ actionColumnData, rowIndex ,rowData});
  }

  onDataClicked(column: SdcTableColumn, row: T, rowIndex: number) {
    this.dataClicked.emit({column,row,rowIndex})
  }
}
