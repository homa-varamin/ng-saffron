import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SdcTableFilter } from '../models/sdc-table-filter';
import { SdcTableSortState } from '../models/sdc-table-sort-state';

@Component({
  selector: 'sdc-table-head-cell',
  templateUrl: './sdc-table-head-cell.component.html',
  styleUrls: ['./sdc-table-head-cell.component.scss'],
})
export class SdcTableHeadComponent {
  @Input()
  filter: SdcTableFilter = new SdcTableFilter();

  @Input()
  title?: string;

  @Input()
  sortable?: boolean;

  @Input()
  sortState: SdcTableSortState = { desc: false, asc: false };

  @Input()
  filterable?: boolean;

  @Input()
  columnType!: number;

  @Output()
  sortStateChange = new EventEmitter<SdcTableSortState>();

  @Output()
  filterChange = new EventEmitter<SdcTableFilter>();

  constructor() {}

  onSortClick() {
    if (!this.sortState.asc && !this.sortState.desc) {
      this.sortState.asc = true;
    } else if (this.sortState.asc) {
      this.sortState.asc = false;
      this.sortState.desc = true;
    } else if (this.sortState.desc) {
      this.sortState.desc = false;
    }

    this.sortStateChange.emit(this.sortState);
  }

  onFilterClick() {
    this.filter.hasFilter = !this.filter?.hasFilter;
    this.filterChange.emit(this.filter);
  }
}
