import { Component } from '@angular/core';
import { SdcButtonTypes } from '../../models/models.module';
import { SdcLoaderService } from '../../sdc-loader/sdc-loader.service';
@Component({
  selector: 'demo-loader',
  templateUrl: './demo-loader.component.html',
  styleUrls: ['./demo-loader.component.scss'],
})
export class DemoLoader {
  public SdcButtonTypes = SdcButtonTypes;
  constructor(private loaderService: SdcLoaderService) {}

  public open() {
    this.loaderService.open();

    setTimeout(() => {
      this.loaderService.close();
    }, 1500);
  }
}
