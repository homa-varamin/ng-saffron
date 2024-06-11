import { SdcTableDataClick } from './models/sdc-table-data-click';
import { SdcTableSortState } from './models/sdc-table-sort-state';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SdcActionColumnEvent } from './models/sdc-action-column-event';
import { SdcTableColumn } from './models/sdc-table-column';
import { defaultPageSizeOptions } from './models/sdc-table-defaults';

@Component({
  selector: 'sdc-table',
  templateUrl: './sdc-table.component.html',
  styleUrls: ['./sdc-table.component.scss'],
})
export class SdcTableComponent<T> {
  @Input()
  public rows: T[] = [];

  @Input()
  public columns: SdcTableColumn[] = [];

  @Input()
  public totalCount: number = 100;

  @Input()
  public pageSize: number = defaultPageSizeOptions[0];

  @Input()
  public pageNumber: number = 1;

  @Input()
  public pageSizeOptions: number[] = defaultPageSizeOptions;

  @Input()
  public hideTopPaginator: boolean = false;

  @Input()
  public hideBottomPaginator: boolean = false;

  @Input()
  public stickyHeader: boolean = true;

  @Output()
  public pageEvent = new EventEmitter<PageEvent>();

  @Output()
  public actionClicked = new EventEmitter<SdcActionColumnEvent>();

  @Output()
  public sortStateChanged = new EventEmitter<SdcTableSortState[]>();

  @Output()
  public dataClicked = new EventEmitter<SdcTableDataClick<T>>();

  @Output()
  public pageSizeChange = new EventEmitter<number>();

  @Output()
  public pageNumberChange = new EventEmitter<number>();

  constructor() {
    (window as any).SdcTableComponent = this;
  }

  public onPageChange(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageSizeChange.emit(this.pageSize);

    this.pageNumber = pageEvent.pageIndex + 1;
    this.pageNumberChange.emit(this.pageNumber);

    this.pageEvent.emit(pageEvent);
  }

  onSortStateChange(data: SdcTableSortState[]) {
    this.sortStateChanged.emit(data);
  }

  onActionClicked(data: SdcActionColumnEvent) {
    this.actionClicked.emit(data);
  }

  onDataClicked(data: SdcTableDataClick<T>) {
    this.dataClicked.emit(data);
  }
}
