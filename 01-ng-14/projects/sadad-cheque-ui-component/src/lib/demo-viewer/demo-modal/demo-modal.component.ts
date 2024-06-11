import { Component, ViewEncapsulation } from '@angular/core';
import { SdcButtonTypes, SdcModalButton } from '../../models/models.module';
@Component({
  selector: 'demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss'],
})
export class DemoModal {
  SdcButtonTypes = SdcButtonTypes;
  openDefaultModal: boolean = false;
  openCustomModal: boolean = false;
  customButtons: SdcModalButton[] = [
    {
      id: '1',
      action: () => {
        this.openCustomModal = false;
      },
      title: 'ثبت تغییرات',
      buttonType: SdcButtonTypes.Primary,
    },
    {
      id: '2',
      action: () => {
        this.openCustomModal = false;
      },
      title: 'بازگشت',
      buttonType: SdcButtonTypes.Basic,
    },
  ];
}
