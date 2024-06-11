import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sdc-text-area',
  templateUrl: './sdc-text-area.component.html',
  styleUrls: ['./sdc-text-area.component.scss'],
})
export class SdcTextAreaComponent implements OnChanges {
  @Input() formGroup!: FormGroup;
  @Input() controlName = '';
  @Input() placeholder: string = '';
  @Input('rows') rows: number = 3;

  control!: AbstractControl;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.setControl(changes);
  }

  private setControl(changes: SimpleChanges) {
    if (changes['formGroup'] || changes['controlName']) {
      this.control = this.formGroup.controls[this.controlName];
    }
  }
}
