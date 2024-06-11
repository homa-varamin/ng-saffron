import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  JsonEditorComponent,
  JsonEditorOptions,
  NgJsonEditorModule,
} from 'ang-jsoneditor';

@Component({
  selector: 'saffron-json-editor',
  templateUrl: './saffron-json-editor.component.html',
  styleUrls: ['./saffron-json-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, FormsModule, NgJsonEditorModule, ReactiveFormsModule],
})
export class SaffronJsonEditorComponent implements AfterViewInit {
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
