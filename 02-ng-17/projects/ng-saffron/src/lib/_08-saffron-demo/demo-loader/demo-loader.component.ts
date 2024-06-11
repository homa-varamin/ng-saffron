import { Component } from '@angular/core';
import { SaffronButtonTypes } from '../../_03-saffron-button/models/saffron-button-types';
import { SaffronLoaderService } from '../../_15-saffron-loader/services/saffron-loader.service';
@Component({
  selector: 'demo-loader',
  templateUrl: './demo-loader.component.html',
  styleUrls: ['./demo-loader.component.scss'],
})
export class DemoLoader {
  public SaffronButtonTypes = SaffronButtonTypes;
  constructor(private loaderService: SaffronLoaderService) {}

  public open() {
    this.loaderService.open();

    setTimeout(() => {
      this.loaderService.close();
    }, 1500);
  }
}
