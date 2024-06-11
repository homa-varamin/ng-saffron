import { Component } from '@angular/core';
import { SdcButtonTypes } from '../../models/models.module';
import { SdcLoaderService } from '../../sdc-loader/sdc-loader.service';
@Component({
  selector: 'demo-login-form',
  templateUrl: './demo-login-form.component.html',
  styleUrls: ['./demo-login-form.component.scss'],
})
export class DemoLoginForm {
  public SdcButtonTypes = SdcButtonTypes;
  constructor(private loaderService: SdcLoaderService) {}

  public open() {
    this.loaderService.open();

    setTimeout(() => {
      this.loaderService.close();
    }, 1500);
  }
}
