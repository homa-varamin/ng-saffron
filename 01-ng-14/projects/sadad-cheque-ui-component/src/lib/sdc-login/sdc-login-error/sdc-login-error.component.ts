import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sdc-login-error',
  templateUrl: './sdc-login-error.component.html',
  styleUrls: ['./sdc-login-error.component.scss'],
})
export class SdcLoginErrorComponent {
  @Output()
  hideClicked = new EventEmitter<void>();

  onHideClick() {
    this.hideClicked.emit();
  }
}
