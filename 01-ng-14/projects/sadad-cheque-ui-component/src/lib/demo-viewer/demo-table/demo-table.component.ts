import { defaultPageSizeOptions } from './../../sdc-table/models/sdc-table-defaults';
import { Component } from '@angular/core';
import {
  SdcActionColumnEvent,
  SdcTableColumn,
  SdcTableDataClick,
} from '../../models/models.module';
import { DemoTableConfig } from './models/demo-table-config';
import { DemoTableModel } from './models/demo-table-model';
@Component({
  selector: 'demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.scss'],
  providers: [DemoTableConfig],
})
export class DemoTable {
  public pageSizeOptions: number[] = defaultPageSizeOptions;
  public rows: DemoTableModel[] = [];
  public columns: SdcTableColumn[] = [];
  totalCount = 50;

  constructor(private tableConfig: DemoTableConfig) {
    this.rows = this.tableConfig.rows;
    this.columns = this.tableConfig.columns;
  }

  public onActionClicked(actionEvent: SdcActionColumnEvent) {
    alert(actionEvent?.actionColumnData?.toolTip);
  }

  public dataClicked(dataClicked: SdcTableDataClick<DemoTableModel>) {
    alert(
      `data clicked\n rowIndex : ${dataClicked.rowIndex}\n column field: ${dataClicked.column.field}`
    );
  }
}
