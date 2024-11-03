import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
@Component({
  selector: 'saffron-input-error',
  templateUrl: './saffron-input-error.component.html',
  styleUrls: ['./saffron-input-error.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SaffronInputErrorComponent {
  @Input() errors: ValidationErrors | null | undefined;

  requiredMessage = 'تکمیل این بخش اجباری است';
  minlengthMessage = 'تعداد کاراکتر وارد شده کمتر از مقدار مجاز می باشد';
  maxlengthMessage = 'تعداد کاراکتر وارد شده بیشتر از مقدار مجاز می باشد';
  nationalCodeMessage = 'شناسه مشتری وارد شد صحیح نمی باشد. ';
}
