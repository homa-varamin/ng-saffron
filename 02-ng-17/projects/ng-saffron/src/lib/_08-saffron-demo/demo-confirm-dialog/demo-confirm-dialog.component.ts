import { Component } from '@angular/core';
import { SaffronButtonTypes } from '../../_03-saffron-button/models/saffron-button-types';
import { SaffronConfirmDialogService } from '../../_06-saffron-confirm-dialog/services/saffron-confirm-dialog.service';
@Component({
  selector: 'demo-confirm-dialog',
  templateUrl: './demo-confirm-dialog.component.html',
  styleUrls: ['./demo-confirm-dialog.component.scss'],
})
export class DemoConfirmDialog {
  public SaffronButtonTypes = SaffronButtonTypes;

  constructor(private confirmDialogService: SaffronConfirmDialogService) {}
  onShowConfirm() {
    this.confirmDialogService
      .confirmDialog({
        title: 'سامانه',
        message: 'آیا از لغو ثبت چک اطمینان دارید؟',
        //acceptButonColor: 'red',
      })
      .subscribe((res: boolean) => {});
  }
}
