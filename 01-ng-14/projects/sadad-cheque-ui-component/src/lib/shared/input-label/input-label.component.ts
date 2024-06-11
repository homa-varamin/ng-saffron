import { Component, Input } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
@Component({
  selector: 'input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss'],
})
export class InputLabelComponent {
  @Input() control?: AbstractControl;
  @Input() placeholder: string = '';

  Validators = Validators;
}
