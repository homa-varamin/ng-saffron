import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SaffronActionColumnData } from '../models/_02-saffron-action-column-data';
import { SaffronColumnType } from '../models/_04-saffron-column-type';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { SaffronDateToPersianPipe } from '../../_19-saffron-pipes/_03-saffron-date-to-persian';
import { SaffronJalaliToPersianPipe } from '../../_19-saffron-pipes/_04-saffron-jalali-to-persian';
import { SaffronShamsiDatePipe } from '../../_19-saffron-pipes/_07-saffron-ShamsiDatePipe';
import { SaffronCurrencyFormatPipe } from '../../_19-saffron-pipes/_02-saffron-currency-format-pipe';

@Component({
  selector: 'saffron-table-data-cell',
  templateUrl: './saffron-table-data-cell.component.html',
  styleUrls: ['./saffron-table-data-cell.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatTooltip,
    SaffronDateToPersianPipe,
    SaffronJalaliToPersianPipe,
    SaffronShamsiDatePipe,
    SaffronCurrencyFormatPipe,
  ],
})
export class SaffronTableDataCellComponent {
  @Input()
  public data!: any;

  @Input()
  columnType!: number;

  @Input()
  actionColumnData?: SaffronActionColumnData[];

  @Input()
  isDataClickable?: boolean;

  @Output()
  public actionClicked = new EventEmitter<SaffronActionColumnData>();

  @Output()
  public dataClicked = new EventEmitter<void>();

  SaffronColumnType = SaffronColumnType;

  constructor() {}

  onActionClicked(actionColumnData: SaffronActionColumnData) {
    this.actionClicked.emit(actionColumnData);
  }

  onDataClick() {
    //column: SaffronTableColumn, row: T, rowIndex: number
    //clickData(column,rows[rowIndex],rowIndex)"
    if (this.isDataClickable) {
      this.dataClicked.emit();
    }
  }
}
