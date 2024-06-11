import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'sdc-label-box',
  templateUrl: './sdc-label-box.component.html',
  styleUrls: ['./sdc-label-box.component.scss'],
})
export class SdcLabelBoxComponent implements OnInit, OnChanges {
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
