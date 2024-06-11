

import { Injectable, Inject } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class PublicService {
  constructor(private _snackBar: MatSnackBar,  ) {
  }

  onSuccessMessege(messege: string, duration: number = 3000) {
    this._snackBar.open(messege, "", { duration: duration, panelClass: ["mat-snack-bar-container-success"] });
  }
  onErorMessege(messege: string, duration: number = 3000) {
    this._snackBar.open(messege, "", { duration: duration, panelClass: ["mat-snack-bar-container-danger"] });
  }
  onInfoMessege(messege: string, duration: number = 3000) {
    this._snackBar.open(messege, "", { duration: duration, panelClass: ["mat-snack-bar-container-info"] });
  }
  onWarningMessege(messege: string, duration: number = 3000) {
    this._snackBar.open(messege, "", { duration: duration, panelClass: ["mat-snack-bar-container-warning"] });
    //   this.toastrService.warning(messege,"سامانه",{closeButton:true,progressBar:true});
  }

  getBranchInfo() {
    return [
      { headerName: "BRANCH", value: "Test" },
      { headerName: "BranchCode", value: "Test" },
      { headerName: "BranchUserNam", value: "Test" }]
  }





  IsValidNationalCode(nationalCode: string): boolean {
    let fakeCode = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999"]

    let Arr = Array.from(nationalCode)
    if (fakeCode.some(e => e == nationalCode)) {
      return false
    } else
      if (Arr.length != 10) {
        return false
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
        return Last == +n
      }
  }


  IsValidCompanyNationalCode(code: string): boolean {

    let L, C, D, S, I: number;
    let isValid: boolean = false;
    let fakeCode: string[] = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"]

    if (fakeCode.some(e => e == code))
      return false;

    let Arr = Array.from(code)
    if (Arr.length != 11) {
      return false
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
        return true
      else
        return false //در غير اين صورت شناسه ملي مورد نظر صحيح نمي باشد
    }

  }
}
