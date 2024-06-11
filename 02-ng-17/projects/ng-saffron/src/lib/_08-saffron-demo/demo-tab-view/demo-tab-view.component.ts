import { Component } from '@angular/core';

import { DemoTableModel } from '../demo-table/models/demo-table-model';
import { DemoTableConfig } from '../demo-table/models/demo-table-config';
import { SaffronTabData } from '../../_24-saffron-tab-view/models/saffron-tab-data';
import { SaffronActionColumnEvent, SaffronTableColumn, SaffronTableDataClick } from '../../_23-saffron-table/saffron-table-public-api';
import { SaffronCardButton } from '../../_04-saffron-card-view/models/saffron-card-button';
@Component({
  selector: 'demo-tab-view',
  templateUrl: './demo-tab-view.component.html',
  styleUrls: ['./demo-tab-view.component.scss'],
  providers: [DemoTableConfig],
})
export class DemoTabView {
  public tabData: SaffronTabData[] = [];
  public message?: string;
  public rows: DemoTableModel[] = [];
  public columns: SaffronTableColumn[] = [];
  cardTwoRemSize = '40rem';
  cardTwoSizeRounded: number = 40;

  constructor(public tableConfig: DemoTableConfig) {
    this.tabData.push({ id: '1', title: 'یک', materialIcon: 'manage_search' });
    this.tabData.push({ id: '2', title: 'دو', materialIcon: 'manage_search' });
    this.tabData.push({ id: '3', title: 'سه', materialIcon: 'manage_search' });
    this.rows = this.tableConfig.rows;
    this.columns = this.tableConfig.columns;
  }

  public tabClicked(tabData: SaffronTabData) {
    this.message = `tab ${tabData.id} clicked`;

    setTimeout(() => {
      this.message = undefined;
    }, 1000);
  }

  public actionButtons: SaffronCardButton[] = [
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

  public onActionClicked(button: SaffronCardButton) {
    alert(button.title);
  }

  public onTableActionClicked(actionEvent: SaffronActionColumnEvent) {
    alert(actionEvent?.actionColumnData?.toolTip);
  }

  public dataClicked(dataClicked: SaffronTableDataClick<DemoTableModel>) {
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
