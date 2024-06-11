import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { SaffronTabData } from './models/saffron-tab-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'saffron-tab-view',
  templateUrl: './saffron-tab-view.component.html',
  styleUrls: ['./saffron-tab-view.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatCard, MatCardContent, MatIcon],
})
export class SaffronTabViewComponent implements OnChanges {
  @Input()
  public tabData: SaffronTabData[] = [];

  @Input()
  public tabTemplates: TemplateRef<any>[] = [];

  @Output()
  public tabClicked = new EventEmitter<SaffronTabData>();

  public activeTabIndex: number = 0;
  public activeTabTemplate!: TemplateRef<any> | null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tabData'] || changes['tabTemplates']) {
      this.setActiveTab(0);
    }
  }

  public onTabClick(clickedTab: SaffronTabData, activeTabIndex: number) {
    this.setActiveTab(activeTabIndex);
    this.tabClicked.emit(clickedTab);
  }

  private setActiveTab(activeTabIndex: number) {
    this.activeTabIndex = activeTabIndex;
    const hasTemplate =
      this.tabTemplates && this.tabTemplates.length > activeTabIndex;
    this.activeTabTemplate = hasTemplate
      ? this.tabTemplates[activeTabIndex]
      : null;
  }
}
