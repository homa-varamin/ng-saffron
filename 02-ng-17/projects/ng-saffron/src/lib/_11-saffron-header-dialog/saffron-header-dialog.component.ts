import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'saffron-header-dialog',
  templateUrl: './saffron-header-dialog.component.html',
  styleUrls: ['./saffron-header-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SaffronHeaderDialogComponent implements OnChanges {


  constructor() { }

  @Input("title") public title: string= "";
  @Output("close") close = new EventEmitter<any>()
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['title'] || changes['title']) {
    //   this.title = changes['title'].currentValue;
    // }
  }

  onClose() {
    this.close.emit()

  }

}
