import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronJsonEditorComponent } from './saffron-json-editor.component';

describe('SaffronJsonEditorComponent', () => {
  let component: SaffronJsonEditorComponent;
  let fixture: ComponentFixture<SaffronJsonEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaffronJsonEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaffronJsonEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
