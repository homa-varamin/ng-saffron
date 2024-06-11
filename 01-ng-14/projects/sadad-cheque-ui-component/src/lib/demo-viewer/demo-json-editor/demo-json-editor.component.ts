import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SdcJsonEditorComponent } from '../../sdc-json-editor/sdc-json-editor.component';

@Component({
  selector: 'demo-json-editor',
  templateUrl: './demo-json-editor.component.html',
  styleUrls: ['./demo-json-editor.component.scss'],
})
export class DemoJsonEditorComponent implements AfterViewInit{
  formGroup!: FormGroup;
  data: any;

  @ViewChild(SdcJsonEditorComponent, { static: false })
  sdcJsonEditor!: SdcJsonEditorComponent;

  constructor(private formBuilder: FormBuilder) {
    this.setData();

    this.formGroup = this.formBuilder.group({
      myinput: [this.data],
    });
  }

  ngAfterViewInit(): void {
    this.sdcJsonEditor.editor.expandAll();
  }

  private setData() {
    this.data = {
      products: [
        {
          name: 'car',
          product: [
            {
              name: 'honda',
              model: [
                { id: 'civic', name: 'civic' },
                { id: 'accord', name: 'accord' },
                { id: 'crv', name: 'crv' },
                { id: 'pilot', name: 'pilot' },
                { id: 'odyssey', name: 'odyssey' },
              ],
            },
          ],
        },
      ],
    };
  }
}
