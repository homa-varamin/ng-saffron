import { Pipe, PipeTransform } from '@angular/core';
import { default as jalaliMoment } from 'jalali-moment';
@Pipe({
  name: 'dateToPersian',
  standalone: true,
})
export class SaffronDateToPersianPipe implements PipeTransform {
  transform(value?: Date | string, isTime?: boolean) {
    if (value == null) return 'تاریخی انتخاب نشده است';

    if (typeof value === 'string' || value instanceof String) {
      if (isTime)
        return jalaliMoment(value).locale('fa').format('YYYY/MM/DD HH:mm:ss');
      return jalaliMoment(value).locale('fa').format('YYYY/MM/DD');
    } else if (!(typeof value?.getMonth == 'function')) return '';

    const stringDate = new Intl.DateTimeFormat('fa-IR').format(value as Date);
    return stringDate;
  }
}
