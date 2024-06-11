import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { SdcCardButton } from '../models/models.module';

@Component({
  selector: 'sdc-form-container',
  templateUrl: './sdc-form-container.component.html',
  styleUrls: ['./sdc-form-container.component.scss'],
})
export class SdcFormContainerComponent implements OnInit {
  @Input() title = 'عنوان';
  @Input() icon = 'search';

  @Input() iconColor = 'blue';
  @Input() template!: TemplateRef<any>;

  @Input() actionButtons: SdcCardButton[] = [];
  @Input() backgroundColor = '#dadde4';
  @Input() foregroundColor = 'white';

  isExpanded = true;

  constructor() {}

  ngOnInit(): void {}
}
