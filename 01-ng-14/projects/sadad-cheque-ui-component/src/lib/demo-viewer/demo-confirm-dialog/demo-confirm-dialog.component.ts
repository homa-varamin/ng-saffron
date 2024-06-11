import { Component } from '@angular/core';
import { SdcButtonTypes } from '../../models/models.module';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';
@Component({
  selector: 'demo-confirm-dialog',
  templateUrl: './demo-confirm-dialog.component.html',
  styleUrls: ['./demo-confirm-dialog.component.scss'],
})
export class DemoConfirmDialog {
  public SdcButtonTypes = SdcButtonTypes;

  constructor(private confirmDialogService: ConfirmDialogService) {}
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
