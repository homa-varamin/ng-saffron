import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SaffronTableHeadComponent } from '../saffron-table-head-cell/saffron-table-head-cell.component';
import { SaffronTableDataCellComponent } from '../saffron-table-data-cell/saffron-table-data-cell.component';
import { MatTableModule } from '@angular/material/table';
import { SaffronActionColumnData } from '../models/_02-saffron-action-column-data';
import { SaffronTableSortState } from '../models/_10-saffron-table-sort-state';
import { SaffronTableColumn } from '../models/_06-saffron-table-column';
import { SaffronActionColumnEvent } from '../models/_03-saffron-action-column-event';
import { SaffronTableDataClick } from '../models/_07-saffron-table-data-click';

@Component({
  selector: 'saffron-table-wrapper',
  templateUrl: './saffron-table-wrapper.component.html',
  styleUrls: ['./saffron-table-wrapper.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SaffronTableHeadComponent,
    SaffronTableDataCellComponent,
    MatTableModule,
  ],
})
export class SaffronTableWrapperComponent<T> implements OnChanges {
  @Input()
  public rows: any[] = [];

  @Input()
  public columns: SaffronTableColumn[] = [];

  @Input()
  public stickyHeader: boolean = true;

  @Output()
  public actionClicked = new EventEmitter<SaffronActionColumnEvent>();

  @Output()
  public sortStateChanged = new EventEmitter<SaffronTableSortState[]>();

  @Output()
  public dataClicked = new EventEmitter<SaffronTableDataClick<T>>();

  tableHeaders: string[] = [];
  sortedColumns: SaffronTableSortState[] = [];

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

  onSortStateChange(columnIndex: number, sortState: SaffronTableSortState) {
    this.sortedColumns[columnIndex] = sortState;
    this.sortStateChanged.emit(this.sortedColumns);
  }

  onActionClicked(
    actionColumnData: SaffronActionColumnData,
    rowIndex: number,
    rowData: T
  ) {
    this.actionClicked.emit({ actionColumnData, rowIndex, rowData });
  }

  onDataClicked(column: SaffronTableColumn, row: T, rowIndex: number) {
    this.dataClicked.emit({ column, row, rowIndex });
  }
}
