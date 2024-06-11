import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import {
  SdcActionColumnEvent,
  SdcCardButton,
  SdcTabData,
  SdcTableColumn,
  SdcTableDataClick,
} from '../../models/models.module';
import { DemoTableModel } from '../demo-public-api';
import { DemoTableConfig } from '../demo-table/models/demo-table-config';
@Component({
  selector: 'demo-card-view',
  templateUrl: './demo-card-view.component.html',
  styleUrls: ['./demo-card-view.component.scss'],
  providers: [DemoTableConfig],
})
export class DemoCardView {
  public rows: DemoTableModel[] = [];
  public columns: SdcTableColumn[] = [];
  cardTwoRemSize = '40rem';
  cardTwoSizeRounded: number = 40;

  constructor(public tableConfig: DemoTableConfig) {
    this.rows = this.tableConfig.rows;
    this.columns = this.tableConfig.columns;
  }

  public tabData: SdcTabData[] = [
    { id: '1', title: 'تب یک', materialIcon: 'manage_search' },
    { id: '2', title: 'تب دو', materialIcon: 'manage_search' },
    { id: '3', title: 'تب سه', materialIcon: 'manage_search' },
  ];

  public actionButtons: SdcCardButton[] = [
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

  public onActionClicked(button: SdcCardButton) {
    if (button.id !== 'action') {
      alert(button.title);
    }
  }

  public onTableActionClicked(actionEvent: SdcActionColumnEvent) {
    alert(actionEvent?.actionColumnData?.toolTip);
  }

  public dataClicked(dataClicked: SdcTableDataClick<DemoTableModel>) {
    alert(
      `data clicked\n rowIndex : ${dataClicked.rowIndex}\n column field: ${dataClicked.column.field}`
    );
  }

  public sliderOneChange(event: any): void {
    this.cardTwoSizeRounded = Math.round(event.value ?? 10);
    this.cardTwoRemSize = `${this.cardTwoSizeRounded}rem`;
  }
}
