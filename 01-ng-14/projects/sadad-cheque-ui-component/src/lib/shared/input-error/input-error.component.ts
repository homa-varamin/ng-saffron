import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
})
export class InputErrorComponent {
  @Input() errors: ValidationErrors | null | undefined;

  requiredMessage = 'تکمیل این بخش اجباری است';
  minlengthMessage = 'تعداد کاراکتر وارد شده کمتر از مقدار مجاز می باشد';
  maxlengthMessage = 'تعداد کاراکتر وارد شده بیشتر از مقدار مجاز می باشد';
  nationalCodeMessage='شناسه مشتری وارد شد صحیح نمی باشد. ';
}
