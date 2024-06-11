import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { Tree, TreeModule } from 'primeng/tree';

@Component({
  selector: 'saffron-tree-view',
  templateUrl: './saffron-tree-view.component.html',
  styleUrls: ['./saffron-tree-view.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, TreeModule],
})
export class SaffronPrimeTreeViewComponent {
  @Input()
  nodes!: TreeNode[];

  selectedNode!: TreeNode<any> | TreeNode<any>[] | null;

  @ViewChild(Tree)
  treeComponent!: Tree;

  constructor(public chRef: ChangeDetectorRef) {}
}
