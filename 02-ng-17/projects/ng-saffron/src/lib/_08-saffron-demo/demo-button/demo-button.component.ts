import { Component } from '@angular/core';
import { SaffronButtonTypes } from '../../_03-saffron-button/models/saffron-button-types';
@Component({
  selector: 'demo-button',
  templateUrl: './demo-button.component.html',
})
export class DemoButton {
  public SaffronButtonTypes = SaffronButtonTypes;

  public clicked() {
    console.log('clicked');
  }
}
