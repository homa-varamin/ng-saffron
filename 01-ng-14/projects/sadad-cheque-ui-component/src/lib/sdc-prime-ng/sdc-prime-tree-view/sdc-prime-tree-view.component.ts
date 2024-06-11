import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';

@Component({
  selector: 'sdc-prime-tree-view',
  templateUrl: './sdc-prime-tree-view.component.html',
  styleUrls: ['./sdc-prime-tree-view.component.scss'],
})
export class SdcPrimeTreeViewComponent {
  @Input()
  nodes!: TreeNode[];

  selectedNode!: TreeNode;

  @ViewChild(Tree)
  treeComponent!: Tree;

  constructor(public chRef: ChangeDetectorRef) {}
}
