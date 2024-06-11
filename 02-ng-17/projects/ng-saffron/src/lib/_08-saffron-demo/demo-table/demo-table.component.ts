import { Component } from '@angular/core';

import { DemoTableConfig } from './models/demo-table-config';
import { DemoTableModel } from './models/demo-table-model';
import {
  SaffronActionColumnEvent,
  SaffronTableColumn,
  SaffronTableDataClick,
  defaultPageSizeOptions,
} from '../../_23-saffron-table/saffron-table-public-api';
import { TransferTemplateTableConfig } from './models/transfer-template-table.config';
@Component({
  selector: 'demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.scss'],
  providers: [DemoTableConfig, TransferTemplateTableConfig],
})
export class DemoTable {
  public pageSizeOptions: number[] = defaultPageSizeOptions;
  public rows: DemoTableModel[] = [];
  public columns: SaffronTableColumn[] = [];
  public transferRows: DemoTableModel[] = [];
  public transferColumns: SaffronTableColumn[] = [];
  totalCount = 50;

  constructor(
    private tableConfig: DemoTableConfig,
    private transferTableConfig: TransferTemplateTableConfig
  ) {
    this.rows = this.tableConfig.rows;
    this.columns = this.tableConfig.columns;
    (window as any).DemoTable = this;

    this.transferColumns = this.transferTableConfig.columns;
    this.transferRows = this.transferTableConfig.rows;
  }

  public onActionClicked(actionEvent: SaffronActionColumnEvent) {
    alert(actionEvent?.actionColumnData?.toolTip);
  }

  public dataClicked(dataClicked: SaffronTableDataClick<DemoTableModel>) {
    alert(
      `data clicked\n rowIndex : ${dataClicked.rowIndex}\n column field: ${dataClicked.column.field}`
    );
  }
}
