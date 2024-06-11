import { AbstractControl } from '@angular/forms';
export function saffronNationalCodeCompanyValidator(control: AbstractControl) {
  debugger;
  if (control.value) {
    let code = "" + control.value;


    let L, C, D, S, I: number;
    let isValid: boolean = false;
    let fakeCode: string[] = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"]

    if (fakeCode.some(e => e == code))
      return { nationalCodeValid: true }

    let Arr = Array.from(code)
    if (Arr.length != 11) {
      return { nationalCodeValid: true }
    } else {

      C = +code[10]; // شناسايي رقم كنترل
      L = code.length // محاسبه طول كد
      D = (+code[9]) + 2;   /// محاسبه دهگان +2

      S = 0;     //1- براي محاسبه رقم کنترل از روي ساير ارقام ، هر رقم را  با رقم
      // دهگان کد +2 کرده و سپس در ضريب آن ضرب مي کنيم و حاصل را با هم جمع مي کنيم.
      S = S + ((D + (+code[0])) * 29);
      S = S + ((D + (+code[1])) * 27);
      S = S + ((D + (+code[2])) * 23);
      S = S + ((D + (+code[3])) * 19);
      S = S + ((D + (+code[4])) * 17);
      S = S + ((D + (+code[5])) * 29);
      S = S + ((D + (+code[6])) * 27);
      S = S + ((D + (+code[7])) * 23);
      S = S + ((D + (+code[8])) * 19);
      S = S + ((D + (+code[9])) * 17);
      S = S % 11;            //2- مجموع بدست آمده از مرحله يک را بر 11 تقسيم مي کنيم
      if (S == 10)         //3- اگر باقيمانده برابر 10 باشد ، باقيمانده را برابر 0 قرار مي دهيم
        S = 0

      if (S == C) //4-اگر رقم کنترل برابر باقيمانده باشد شناسه ملي صحيح فرض مي شود
        return null
      else
        return { nationalCodeValid: true } //در غير اين صورت شناسه ملي مورد نظر صحيح نمي باشد
    }
  }

  return null;
}
