import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'demo-text-area',
  templateUrl: './demo-text-area.component.html',
  styleUrls: ['./demo-text-area.component.scss'],
})
export class DemoTextArea {
  public formGroup!: FormGroup;
  get desc() {
    return this.formGroup.get('desc');
  }

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      desc: ['', Validators.required],
      descTouched: ['', Validators.required],
    });

    this.formGroup.get('descTouched')?.markAllAsTouched();
  }

  title: string = 'تست مقادیر';
}
