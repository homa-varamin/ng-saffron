import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { SdcDataType } from '../models/sdc-data-type';

@Component({
  selector: 'sdc-input',
  templateUrl: './sdc-input.component.html',
  styleUrls: ['./sdc-input.component.scss'],
  providers: [],
})
export class SdcInputComponent implements OnChanges {
  //general
  @Input() dataType: SdcDataType = SdcDataType.Text;
  @Input() formGroup!: FormGroup;
  @Input() controlName = '';
  @Input() placeholder: string = '';

  //number
  @Input('min') min: number = 0;
  @Input('max') max: number = 90000000000000000;
  @Input() isButton: boolean = false;
  @Input() isReadOnly: boolean = false;
  @Input() icon: string = 'search';

  @Input('tooltip') tooltip: string = '';
  @Input('position') position: TooltipPosition = 'above';

  //text
  @Input('maxlength') maxlength: number = 1000;
  @Input() showLength: boolean = true;
  @Input() showToPersian: boolean = true;

  @Output() onClick = new EventEmitter<string | number>();
  @Output() enterPressed = new EventEmitter<string | number>();

  control?: AbstractControl;
  SdcDataType = SdcDataType;
  inputValue: string | number = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setControl(changes);
  }

  private setControl(changes: SimpleChanges) {
    if (changes['formGroup'] || changes['controlName']) {
      this.control = this.formGroup.controls[this.controlName];
      // this.control.valueChanges.subscribe((newValue) => {
      //   this.inputValue = newValue;
      // });
    }
  }

  onButtonClicked() {
    this.onClick.emit(this.control?.value);
    //  this.onClick.emit(this.inputValue);
  }

  onEnterPressed() {
    this.enterPressed.emit();
    this.onClick.emit( this.control?.value)
  }
}
