import { SdcPrimeTreeViewComponent } from './../../sdc-prime-ng/sdc-prime-tree-view/sdc-prime-tree-view.component';
import { Component, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { DemoTreeViewData } from './models/demo-tree-view-data';

@Component({
  selector: 'lib-demo-tree-view',
  templateUrl: './demo-tree-view.component.html',
  styleUrls: ['./demo-tree-view.component.scss'],
})
export class DemoTreeViewComponent {
  nodes!: TreeNode[];

  @ViewChild(SdcPrimeTreeViewComponent)
  treeComponent!: SdcPrimeTreeViewComponent;

  constructor() {
    this.nodes = [
      {
        label: 'Root',
        children: DemoTreeViewData.data.data,
      },
    ];
  }
}
