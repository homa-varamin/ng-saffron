import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { SdcCardButton } from './models/sdc-card-button';

@Component({
  selector: 'sdc-card-view',
  templateUrl: './sdc-card-view.component.html',
  styleUrls: ['./sdc-card-view.component.scss'],
})
export class SdcCardViewComponent {
  @Input()
  public cardTemplate!: TemplateRef<any>;

  @Input()
  public actionButtons: SdcCardButton[] = [];

  @Input()
  public cardColor = 'white';

  @Output()
  public actionClicked = new EventEmitter<SdcCardButton>();

  constructor() {}

  onActionClicked(button: SdcCardButton) {
    this.actionClicked.emit(button);
  }

  emptyMethod(id?: string) {}
}
