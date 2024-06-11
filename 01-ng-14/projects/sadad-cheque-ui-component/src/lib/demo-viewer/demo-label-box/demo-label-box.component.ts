import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'demo-label-box',
  templateUrl: './demo-label-box.component.html',
  styleUrls: ['./demo-label-box.component.scss'],
})
export class DemoLableBoxComponent {
  public formGroup!: FormGroup;
  get desc() {
    return this.formGroup.get('desc');
  }

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      desc: ['', Validators.required],
    });
  }

  title: string = 'تست مقادیر';
}
