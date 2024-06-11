import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdcJsonEditorComponent } from './sdc-json-editor.component';

describe('SdcJsonEditorComponent', () => {
  let component: SdcJsonEditorComponent;
  let fixture: ComponentFixture<SdcJsonEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdcJsonEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdcJsonEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
