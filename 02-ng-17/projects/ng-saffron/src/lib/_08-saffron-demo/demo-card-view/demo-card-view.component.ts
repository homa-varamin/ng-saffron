import { Component } from '@angular/core';

import { DemoTableConfig } from '../demo-table/models/demo-table-config';
import { DemoTableModel } from '../demo-table/models/demo-table-model';
import {
  SaffronActionColumnEvent,
  SaffronTableColumn,
  SaffronTableDataClick,
} from '../../_23-saffron-table/saffron-table-public-api';
import { SaffronTabData } from '../../_24-saffron-tab-view/models/saffron-tab-data';
import { SaffronCardButton } from '../../_04-saffron-card-view/models/saffron-card-button';
@Component({
  selector: 'demo-card-view',
  templateUrl: './demo-card-view.component.html',
  styleUrls: ['./demo-card-view.component.scss'],
  providers: [DemoTableConfig],
})
export class DemoCardView {
  public rows: DemoTableModel[] = [];
  public columns: SaffronTableColumn[] = [];
  cardTwoRemSize = '40rem';
  cardTwoSizeRounded: number = 40;

  constructor(public tableConfig: DemoTableConfig) {
    this.rows = this.tableConfig.rows;
    this.columns = this.tableConfig.columns;
  }

  public tabData: SaffronTabData[] = [
    { id: '1', title: 'تب یک', materialIcon: 'manage_search' },
    { id: '2', title: 'تب دو', materialIcon: 'manage_search' },
    { id: '3', title: 'تب سه', materialIcon: 'manage_search' },
  ];

  public actionButtons: SaffronCardButton[] = [
    {
      id: 'dis',
      title: 'غیر فعال',
      color: 'primary',
      disabled: true,
    },
    {
      id: 'action',
      title: 'انجام عملیات',
      color: 'primary',
      action: () => {
        alert('action clicked');
      },
    },
    {
      id: 'delete',
      title: 'پاک کردن',
      icon: 'delete',
    },
  ];

  public onActionClicked(button: SaffronCardButton) {
    if (button.id !== 'action') {
      alert(button.title);
    }
  }

  public onTableActionClicked(actionEvent: SaffronActionColumnEvent) {
    alert(actionEvent?.actionColumnData?.toolTip);
  }

  public dataClicked(dataClicked: SaffronTableDataClick<DemoTableModel>) {
    alert(
      `data clicked\n rowIndex : ${dataClicked.rowIndex}\n column field: ${dataClicked.column.field}`
    );
  }

  public sliderOneChange(event: any): void {
    this.cardTwoSizeRounded = Math.round(event.value ?? 10);
    this.cardTwoRemSize = `${this.cardTwoSizeRounded}rem`;
  }
}
