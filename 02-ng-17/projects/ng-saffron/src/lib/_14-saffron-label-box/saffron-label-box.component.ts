import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'saffron-label-box',
  templateUrl: './saffron-label-box.component.html',
  styleUrls: ['./saffron-label-box.component.scss'],
  standalone: true,
  imports: [CommonModule, MatLabel],
})
export class SaffronLabelBoxComponent implements OnInit, OnChanges {
  constructor() {}

  @Input('placeholder') placeholder: string = '';

  @Input()
  public template!: TemplateRef<any>;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['placeholder'])
      if (changes['placeholder'].currentValue)
        this.placeholder = changes['placeholder'].currentValue;
  }
}
