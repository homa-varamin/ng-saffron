import { Component } from '@angular/core';
import { SdcButtonTypes } from '../../models/models.module';
@Component({
  selector: 'demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.scss'],
})
export class DemoButton {
  public SdcButtonTypes = SdcButtonTypes;

  public clicked() {
    console.log('clicked');
  }
}
