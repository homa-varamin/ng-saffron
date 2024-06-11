import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdcLabelBoxComponent } from './sdc-label-box.component';

describe('SdcLabelBoxComponent', () => {
  let component: SdcLabelBoxComponent;
  let fixture: ComponentFixture<SdcLabelBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdcLabelBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdcLabelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
