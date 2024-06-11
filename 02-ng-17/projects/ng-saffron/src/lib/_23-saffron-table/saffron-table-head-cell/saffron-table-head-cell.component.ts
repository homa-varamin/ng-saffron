import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SaffronTableFilter } from '../models/_09-saffron-table-filter';
import { SaffronTableSortState } from '../models/_10-saffron-table-sort-state';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'saffron-table-head-cell',
  templateUrl: './saffron-table-head-cell.component.html',
  styleUrls: ['./saffron-table-head-cell.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIcon],
})
export class SaffronTableHeadComponent {
  @Input()
  filter: SaffronTableFilter = new SaffronTableFilter();

  @Input()
  title?: string;

  @Input()
  sortable?: boolean;

  @Input()
  sortState: SaffronTableSortState = { desc: false, asc: false };

  @Input()
  filterable?: boolean;

  @Input()
  columnType!: number;

  @Output()
  sortStateChange = new EventEmitter<SaffronTableSortState>();

  @Output()
  filterChange = new EventEmitter<SaffronTableFilter>();

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
