import { AfterViewInit, Component, HostListener } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { SdcDataType } from "./models/sdc-data-type";
@Component({
  selector: 'app-base',
  template: ``,
  styles: []
})
export abstract class BaseComponent {
  public form: FormGroup;
  SdcDataType = SdcDataType;

  constructor() {
    this.form = {} as FormGroup;

  }

  getConstTextWithCode(code: number, lst: any[]): string {
    if (!lst.some(c => c.code == code))
      return ""
    debugger
    let res = lst.find(c => c.code == code).text
    return res



  }

  IsNotEmptyValue(value: any): boolean {
    if (typeof value === 'string' || value instanceof String) {
      if (value == null || value == '')
        return false
      else
        return true;
    } else
      if (value == null)
        return false;
    return true
  }

  setFirstFocus() {
    setTimeout(() => {
      const listOfInputs = document.getElementsByClassName('input-of-sdc');
      if (listOfInputs.length != 0)
        (listOfInputs[0] as HTMLInputElement).focus();
    }, 100)
  }

  getElement() {

    let aa = document.querySelector("sdc-select")
  }


  @HostListener('document:keydown.tab', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

  clearFormGroupArray = (formArray: FormGroup[]) => {
    while (formArray.length !== 0) {
      formArray.splice(0)
    }
  }
}

