import { Component, ViewEncapsulation } from '@angular/core';
import { SaffronButtonTypes } from '../../_03-saffron-button/models/saffron-button-types';
import { SaffronModalButton } from '../../_17-saffron-modal/models/saffron-modal-button';
@Component({
  selector: 'demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss'],
})
export class DemoModal {
  SaffronButtonTypes = SaffronButtonTypes;
  openDefaultModal: boolean = false;
  openCustomModal: boolean = false;
  customButtons: SaffronModalButton[] = [
    {
      id: '1',
      action: () => {
        this.openCustomModal = false;
      },
      title: 'ثبت تغییرات',
      buttonType: SaffronButtonTypes.Primary,
    },
    {
      id: '2',
      action: () => {
        this.openCustomModal = false;
      },
      title: 'بازگشت',
      buttonType: SaffronButtonTypes.Basic,
    },
  ];
}
