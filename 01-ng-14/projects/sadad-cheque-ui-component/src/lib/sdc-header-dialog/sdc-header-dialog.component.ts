import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sdc-header-dialog',
  templateUrl: './sdc-header-dialog.component.html',
  styleUrls: ['./sdc-header-dialog.component.css']
})
export class SdcHeaderDialogComponent implements OnChanges {


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
