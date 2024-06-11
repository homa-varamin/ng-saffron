import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SdcButtonTypes } from './models/sdc-button-types';

@Component({
  selector: 'sdc-button',
  templateUrl: './sdc-button.component.html',
  styleUrls: ['./sdc-button.component.scss'],
})
export class SdcButtonComponent {
  @Input()
  public title!: string;

  @Input()
  public buttonStyle!: string;

  @Input()
  public matIcon!: string;

  @Input()
  public buttonType!: SdcButtonTypes;

  @Input()
  public htmlButtonType: 'button' | 'submit' | 'reset' = 'button';

  @Input()
  public tooltip!: string;

  @Output()
  public buttonClicked = new EventEmitter();

  public clicked() {
    this.buttonClicked.emit();
  }
}
