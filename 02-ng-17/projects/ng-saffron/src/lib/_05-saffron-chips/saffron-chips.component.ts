import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SaffronChipsModel } from './models/saffron-chips.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'saffron-chips',
  templateUrl: './saffron-chips.component.html',
  styleUrls: ['./saffron-chips.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatChipsModule, MatIconModule],
})
export class SaffronChipsComponent {
  @Input()
  chipList: SaffronChipsModel[] = [];

  @Output()
  remove = new EventEmitter<SaffronChipsModel>();
}
