import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { SaffronCardButton } from '../_04-saffron-card-view/models/saffron-card-button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SaffronCardViewComponent } from '../_04-saffron-card-view/saffron-card-view.component';

@Component({
  selector: 'saffron-form-container',
  templateUrl: './saffron-form-container.component.html',
  styleUrls: ['./saffron-form-container.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, SaffronCardViewComponent],
})
export class SaffronFormContainerComponent implements OnInit {
  @Input() title = 'جستجو';
  @Input() icon = 'manage_search';

  @Input() iconColor = 'blue';
  @Input() template!: TemplateRef<any>;

  @Input() actionButtons: SaffronCardButton[] = [];
  @Input() backgroundColor = '#dadde4';
  @Input() foregroundColor = 'white';
  @Input() showExpand = true;

  isExpanded = true;

  constructor() {}

  ngOnInit(): void {}
}
