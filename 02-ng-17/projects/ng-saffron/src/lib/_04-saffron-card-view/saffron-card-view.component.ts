import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { SaffronCardButton } from './models/saffron-card-button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'saffron-card-view',
  templateUrl: './saffron-card-view.component.html',
  styleUrls: ['./saffron-card-view.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatIcon, MatButtonModule],
})
export class SaffronCardViewComponent {
  @Input()
  public cardTemplate!: TemplateRef<any>;

  @Input()
  public actionButtons: SaffronCardButton[] = [];

  @Input()
  public cardColor = 'white';

  @Output()
  public actionClicked = new EventEmitter<SaffronCardButton>();

  constructor() {}

  onActionClicked(button: SaffronCardButton) {
    this.actionClicked.emit(button);
  }

  emptyMethod(id?: string) {}
}
