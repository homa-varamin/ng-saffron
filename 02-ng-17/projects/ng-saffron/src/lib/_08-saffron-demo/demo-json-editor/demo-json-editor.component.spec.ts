import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoJsonEditorComponent } from './demo-json-editor.component';

describe('DemoJsonEditorComponent', () => {
  let component: DemoJsonEditorComponent;
  let fixture: ComponentFixture<DemoJsonEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoJsonEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoJsonEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
