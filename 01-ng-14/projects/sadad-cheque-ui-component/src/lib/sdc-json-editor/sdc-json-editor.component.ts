import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'sdc-json-editor',
  templateUrl: './sdc-json-editor.component.html',
  styleUrls: ['./sdc-json-editor.component.scss'],
})
export class SdcJsonEditorComponent implements AfterViewInit {
  @Input()
  formGroup!: FormGroup;

  @Input()
  controlName = '';

  @Input()
  options!: JsonEditorOptions;

  @ViewChild(JsonEditorComponent, { static: false })
  editor!: JsonEditorComponent;

  constructor(private chRef: ChangeDetectorRef) {
    this.setOptions();
  }

  ngAfterViewInit(): void {
    if (!this.options) {
      this.setOptions();
    }

    this.chRef.detectChanges();
  }

  private setOptions() {
    this.options = new JsonEditorOptions();
    this.options.modes = ['code', 'text', 'tree', 'view'];
  }
}
