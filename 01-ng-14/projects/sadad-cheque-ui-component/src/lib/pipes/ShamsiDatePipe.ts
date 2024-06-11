import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shamsiDate',
})
export class ShamsiDatePipe implements PipeTransform {
  transform(value: any) {
    if(!value) return '';

    const myValue = value + '';

    if (myValue.length === 0) return '';
    return `${myValue.substring(0, 4)}/${myValue.substring(
      4,
      6
    )}/${myValue.substring(6, 8)}`;
  }
}
