import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'sdc-tooltip',
  templateUrl: './sdc-tooltip.component.html',
  styleUrls: ['./sdc-tooltip.component.css']
})
export class SdcTooltipComponent implements OnInit {

  constructor() { }
  @Input('tooltip') tooltipText: string="";
  @Input('position') position: TooltipPosition="above";
  ngOnInit(): void {
  }

}
