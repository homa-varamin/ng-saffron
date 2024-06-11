import { SaffronTableDataClick } from './models/_07-saffron-table-data-click';
import { SaffronTableSortState } from './models/_10-saffron-table-sort-state';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { SaffronActionColumnEvent } from './models/_03-saffron-action-column-event';
import { SaffronTableColumn } from './models/_06-saffron-table-column';
import { defaultPageSizeOptions } from './models/_08-saffron-table-defaults';
import { SaffronPersianPaginator } from './models/_05-saffron-persian-paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaffronTableWrapperComponent } from './saffron-table-wrapper/saffron-table-wrapper.component';

@Component({
    selector: 'saffron-table',
    templateUrl: './saffron-table.component.html',
    styleUrls: ['./saffron-table.component.scss'],
    standalone: true,
    providers: [{ provide: MatPaginatorIntl, useClass: SaffronPersianPaginator }],
    imports: [
        CommonModule,
        FormsModule,
        SaffronTableWrapperComponent,
        MatPaginatorModule,
    ]
})
export class SaffronTableComponent<T> {
  @Input()
  public rows: T[] = [];

  @Input()
  public columns: SaffronTableColumn[] = [];

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
  public actionClicked = new EventEmitter<SaffronActionColumnEvent>();

  @Output()
  public sortStateChanged = new EventEmitter<SaffronTableSortState[]>();

  @Output()
  public dataClicked = new EventEmitter<SaffronTableDataClick<T>>();

  @Output()
  public pageSizeChange = new EventEmitter<number>();

  @Output()
  public pageNumberChange = new EventEmitter<number>();

  constructor() {
    (window as any).SaffronTableComponent = this;
  }

  public onPageChange(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageSizeChange.emit(this.pageSize);

    this.pageNumber = pageEvent.pageIndex + 1;
    this.pageNumberChange.emit(this.pageNumber);

    this.pageEvent.emit(pageEvent);
  }

  onSortStateChange(data: SaffronTableSortState[]) {
    this.sortStateChanged.emit(data);
  }

  onActionClicked(data: SaffronActionColumnEvent) {
    this.actionClicked.emit(data);
  }

  onDataClicked(data: SaffronTableDataClick<T>) {
    this.dataClicked.emit(data);
  }
}
