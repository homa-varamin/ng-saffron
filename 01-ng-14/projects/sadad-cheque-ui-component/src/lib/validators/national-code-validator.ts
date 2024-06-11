import { AbstractControl } from '@angular/forms';
export function NationalCodeValidator(control: AbstractControl) {
  debugger;
  if (control.value) {
    let nationalCode =""+control.value;
    let fakeCode = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999"]

    let Arr = Array.from(nationalCode)
    if (fakeCode.some(e => e == nationalCode)) {
      return { nationalCodeValid: true}
    } else
      if (Arr.length != 10) {
        return { nationalCodeValid: true}
      } else {
        let Sum = 0;
        let Last: number;

        for (let i = 0; i < 9; i++) {
          Sum += +Arr[i] * (10 - i)
        }
        let divideRemaining = Sum % 11;
        if (divideRemaining < 2) {
          Last = divideRemaining;
        } else {
          Last = 11 - (divideRemaining);
        }
        let n = Arr[9];
        return null;


      }
  }



  return null;
}
