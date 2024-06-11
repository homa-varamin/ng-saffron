import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { SdcTabData } from './models/sdc-tab-data';

@Component({
  selector: 'sdc-tab-view',
  templateUrl: './sdc-tab-view.component.html',
  styleUrls: ['./sdc-tab-view.component.scss'],
})
export class SdcTabViewComponent implements OnChanges {
  @Input()
  public tabData: SdcTabData[] = [];

  @Input()
  public tabTemplates: TemplateRef<any>[] = [];

  @Output()
  public tabClicked = new EventEmitter<SdcTabData>();

  public activeTabIndex: number = 0;
  public activeTabTemplate!: TemplateRef<any> | null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tabData'] || changes['tabTemplates']) {
      this.setActiveTab(0);
    }
  }

  public onTabClick(clickedTab: SdcTabData, activeTabIndex: number) {
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
