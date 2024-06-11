import { Component } from '@angular/core';
import {
  SdcActionColumnEvent,
  SdcCardButton,
  SdcTabData,
  SdcTableColumn,
  SdcTableDataClick,
} from '../../models/models.module';
import { DemoTableConfig } from '../demo-public-api';
import { DemoTableModel } from '../demo-table/models/demo-table-model';
@Component({
  selector: 'demo-tab-view',
  templateUrl: './demo-tab-view.component.html',
  styleUrls: ['./demo-tab-view.component.scss'],
  providers: [DemoTableConfig],
})
export class DemoTabView {
  public tabData: SdcTabData[] = [];
  public message?: string;
  public rows: DemoTableModel[] = [];
  public columns: SdcTableColumn[] = [];
  cardTwoRemSize = '40rem';
  cardTwoSizeRounded: number = 40;

  constructor(public tableConfig: DemoTableConfig) {
    this.tabData.push({ id: '1', title: 'یک', materialIcon: 'manage_search' });
    this.tabData.push({ id: '2', title: 'دو', materialIcon: 'manage_search' });
    this.tabData.push({ id: '3', title: 'سه', materialIcon: 'manage_search' });
    this.rows = this.tableConfig.rows;
    this.columns = this.tableConfig.columns;
  }

  public tabClicked(tabData: SdcTabData) {
    this.message = `tab ${tabData.id} clicked`;

    setTimeout(() => {
      this.message = undefined;
    }, 1000);
  }

  public actionButtons: SdcCardButton[] = [
    {
      id: 'action',
      title: 'انجام عملیات',
      color: 'primary',
    },
    {
      id: 'delete',
      title: 'پاک کردن',
      icon: 'delete',
    },
  ];

  public onActionClicked(button: SdcCardButton) {
    alert(button.title);
  }

  public onTableActionClicked(actionEvent: SdcActionColumnEvent) {
    alert(actionEvent?.actionColumnData?.toolTip);
  }

  public dataClicked(dataClicked: SdcTableDataClick<DemoTableModel>) {
    alert(
      `data clicked\n rowIndex : ${dataClicked.rowIndex}\n column field: ${dataClicked.column.field}`
    );
  }

  public sliderOneChange(event: any) {
    debugger;
    this.cardTwoSizeRounded = Math.round(event.value ?? 10);
    this.cardTwoRemSize = `${this.cardTwoSizeRounded}rem`;
  }
}
