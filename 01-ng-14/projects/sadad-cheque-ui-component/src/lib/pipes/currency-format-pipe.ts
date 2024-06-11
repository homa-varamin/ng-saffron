
import { Pipe, PipeTransform } from '@angular/core';
 

@Pipe({
    name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
    transform(value: any) {
       
        // if (value == null)
        //     return '0 '
        let cur = Math.floor(value)
        let asahar = value - cur
      
        let a = ("" + cur);
        let res = "";
        let seperate = 0;
        a.split('').reverse().forEach(element => {
            if (seperate == 3) {
                res += ',';
                seperate = 0;
            }
            res += element;
            seperate++;
        });
        if (asahar == 0)
            return res.split('').reverse().join('');
        else
            return res.split('').reverse().join('')+   asahar.toFixed(2).replace("0.",".") 
    }


}