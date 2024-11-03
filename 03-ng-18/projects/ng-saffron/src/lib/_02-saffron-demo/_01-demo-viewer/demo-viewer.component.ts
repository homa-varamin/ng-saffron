
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SaffronMenuModel } from './models/menu-model';
import { CommonModule } from '@angular/common';
import { DemoInput } from '../_02-demo-input/demo-input.component';

@Component({
  selector: 'demo-viewer',
  templateUrl: './demo-viewer.component.html',
  styleUrls: ['./demo-viewer.component.scss'],
  standalone: true,
  imports: [CommonModule,MatSidenavModule,MatListModule]
})
export class DemoViewerComponent implements AfterViewInit {
  activeMenu: string = 'input';
  menuItems: SaffronMenuModel[] = [
    { id: 'input', title: 'ورودی', componentType: DemoInput },
  ];

  @ViewChild(MatSidenav)
  private matSidenav!: MatSidenav;

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  sideNavContent!: ViewContainerRef;

  constructor(
    private renderer: Renderer2,
    private chRef: ChangeDetectorRef,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngAfterViewInit(): void {
    this.matSidenav.open();
    const menuItem = this.menuItems.find((item) => item.id === this.activeMenu);
    this.addDynamicComponent(menuItem);
  }

  public menuClicked(menuItem: string) {
    try {
      this.sideNavContent.remove(0);
    } catch (error) { }

    const item = this.menuItems.find((item) => item.id === menuItem);
    this.addDynamicComponent(item);
  }

  private addDynamicComponent(menuItem: SaffronMenuModel | undefined) {
    if (menuItem) {
      this.sideNavContent.createComponent(menuItem.componentType ?? DemoInput);
    }

    this.chRef.detectChanges();
  }
}
