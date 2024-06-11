import { Pipe, PipeTransform } from '@angular/core';
import { default as jalaliMoment } from 'jalali-moment';

@Pipe({
  name: 'jalaliToPersian',
  standalone: true,
})
export class SaffronJalaliToPersianPipe implements PipeTransform {
  transform(value?: jalaliMoment.Moment ) {
    if (!value || !((value as any)._d)) return '';

    const stringDate = new Intl.DateTimeFormat('fa-IR').format((value as any)._d);
    return stringDate;
  }
}
