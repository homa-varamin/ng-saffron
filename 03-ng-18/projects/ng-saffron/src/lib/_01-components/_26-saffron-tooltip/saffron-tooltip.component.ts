import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'saffron-tooltip',
  templateUrl: './saffron-tooltip.component.html',
  styleUrls: ['./saffron-tooltip.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltip,
    MatIcon,
  ],
})
export class SaffronTooltipComponent implements OnInit {
  constructor() {}
  @Input('tooltip') tooltipText: string = '';
  @Input('position') position: TooltipPosition = 'above';
  ngOnInit(): void {}
}
