import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { SaffronDataType } from '../_18-saffron-models/saffron-data-type';
import { SaffronInputLabelComponent } from '../_30-saffron-input-label/saffron-input-label.component';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SaffronNumberToPersianPipe } from '../_19-saffron-pipes/_05-saffron-number-to-persian-pipe';
import { SaffronInputErrorComponent } from '../_29-saffron-input-error/saffron-input-error.component';

@Component({
  selector: 'saffron-input',
  templateUrl: './saffron-input.component.html',
  styleUrls: ['./saffron-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    SaffronInputLabelComponent,
    SaffronNumberToPersianPipe,
    SaffronInputErrorComponent
  ],
})
export class SaffronInputComponent implements OnChanges {
  //general
  @Input() dataType: SaffronDataType = SaffronDataType.Text;
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
  SaffronDataType = SaffronDataType;
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
    this.onClick.emit(this.control?.value);
  }
}
