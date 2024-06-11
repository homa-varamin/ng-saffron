import { Component } from '@angular/core';
@Component({
  selector: 'demo-login',
  templateUrl: './demo-login.component.html',
  styleUrls: ['./demo-login.component.scss'],
})
export class DemoLogin {
  onSuccess() {
    alert('Login Succes');
  }
}
