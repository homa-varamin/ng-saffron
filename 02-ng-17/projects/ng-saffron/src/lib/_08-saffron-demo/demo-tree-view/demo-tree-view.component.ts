import { Component, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { DemoTreeViewData } from './models/demo-tree-view-data';
import { SaffronPrimeTreeViewComponent } from '../../_20-saffron-tree-view/saffron-tree-view.component';
@Component({
  selector: 'lib-demo-tree-view',
  templateUrl: './demo-tree-view.component.html',
  styleUrls: ['./demo-tree-view.component.scss'],
})
export class DemoTreeViewComponent {
  nodes!: TreeNode[];

  @ViewChild(SaffronPrimeTreeViewComponent)
  treeComponent!: SaffronPrimeTreeViewComponent;

  constructor() {
    this.nodes = [
      {
        label: 'Root',
        children: DemoTreeViewData.data.data,
      },
    ];
  }
}
