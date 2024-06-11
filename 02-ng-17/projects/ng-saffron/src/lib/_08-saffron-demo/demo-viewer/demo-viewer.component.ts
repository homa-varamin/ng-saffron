import { DemoDatePicker } from './../demo-date-picker/demo-date-picker.component';
import { DemoInput } from './../demo-input/demo-input.component';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SaffronMenuModel } from './models/menu-model';
import { SaffronLoaderService } from '../../_15-saffron-loader/services/saffron-loader.service';
import { DemoTable } from '../demo-table/demo-table.component';
import { DemoAdvancedFilterComponent } from '../demo-advanced-filter/demo-advanced-filter.component';
import { DemoChipsComponent } from '../demo-chips/demo-chips.component';
import { DemoFormContainerComponent } from '../demo-form-container/demo-form-container.component';
import { DemoJsonEditorComponent } from '../demo-json-editor/demo-json-editor.component';
import { DemoMessageServiceComponent } from '../demo-message-service/demo-message-service.component';
import { DemoTreeViewComponent } from '../demo-tree-view/demo-tree-view.component';
import { DemoSelect } from '../demo-select/demo-select.component';
import { DemoTextArea } from '../demo-text-area/demo-text-area.component';
import { DemoTabView } from '../demo-tab-view/demo-tab-view.component';
import { DemoCardView } from '../demo-card-view/demo-card-view.component';
import { DemoLableBoxComponent } from '../demo-label-box/demo-label-box.component';
import { DemoModal } from '../demo-modal/demo-modal.component';
import { DemoConfirmDialog } from '../demo-confirm-dialog/demo-confirm-dialog.component';
import { DemoButton } from '../demo-button/demo-button.component';
import { DemoLoader } from '../demo-loader/demo-loader.component';

// Optional (depending on usage)

@Component({
  selector: 'demo-viewer',
  templateUrl: './demo-viewer.component.html',
  styleUrls: ['./demo-viewer.component.scss'],
})
export class DemoViewerComponent implements AfterViewInit {
  activeMenu: string = 'table';
  menuItems: SaffronMenuModel[] = [
    { id: 'button', title: 'دکمه', componentType: DemoButton },
    { id: 'table', title: 'جدول', componentType: DemoTable },
    {
      id: 'advanced-filter',
      title: 'فیلتر پیشرفته',
      componentType: DemoAdvancedFilterComponent,
    },
    {
      id: 'DemoChipsComponent',
      title: 'چیپس',
      componentType: DemoChipsComponent,
    },
    {
      id: 'form-container',
      title: 'قاب فرم',
      componentType: DemoFormContainerComponent,
    },
    {
      id: 'message-service',
      title: 'نمایش پیام',
      componentType: DemoMessageServiceComponent,
    },
    {
      id: 'tree-view',
      title: 'نمایش درختی',
      componentType: DemoTreeViewComponent,
    },
    {
      id: 'json-editor',
      title: 'ویرایشگر جی سان',
      componentType: DemoJsonEditorComponent,
    },
    { id: 'date-picker', title: 'تقویم', componentType: DemoDatePicker },
    { id: 'input', title: 'ورودی', componentType: DemoInput },
    { id: 'select', title: 'دراپ داون', componentType: DemoSelect },
    { id: 'text-area', title: 'متن', componentType: DemoTextArea },
    { id: 'tab-view', title: 'نمایش تب', componentType: DemoTabView },
    { id: 'card-view', title: 'نمایش کارت', componentType: DemoCardView },
    {
      id: 'label-box',
      title: 'نمایشگر عنوان',
      componentType: DemoLableBoxComponent,
    },
    { id: 'modal', title: 'مودال', componentType: DemoModal },
    {
      id: 'confirm-dialog',
      title: 'فرم تایید',
      componentType: DemoConfirmDialog,
    },
    { id: 'loader', title: 'لودینگ', componentType: DemoLoader },
  ];

  @ViewChild(MatSidenav)
  private matSidenav!: MatSidenav;

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  sideNavContent!: ViewContainerRef;

  constructor(
    private renderer: Renderer2,
    private chRef: ChangeDetectorRef,
    private viewContainerRef: ViewContainerRef,
    private loaderService: SaffronLoaderService
  ) {
    this.loaderService.setRootViewContainerRef(viewContainerRef);
  }

  ngAfterViewInit(): void {
    this.matSidenav.open();

    const lastMenuItem = sessionStorage.getItem('menuItem');
    this.activeMenu = lastMenuItem ?? this.activeMenu;

    const menuItem = this.menuItems.find((item) => item.id === lastMenuItem);
    this.addDynamicComponent(menuItem);
  }

  public menuClicked(menuItem: string) {
    sessionStorage.setItem('menuItem', menuItem);
    this.activeMenu = menuItem;

    try {
      this.sideNavContent.remove(0);
    } catch (error) {}

    const item = this.menuItems.find((item) => item.id === menuItem);
    this.addDynamicComponent(item);
  }

  private addDynamicComponent(menuItem: SaffronMenuModel | undefined) {
    if (menuItem) {
      this.sideNavContent.createComponent(menuItem.componentType ?? DemoTable);
    }

    this.chRef.detectChanges();
  }
}
