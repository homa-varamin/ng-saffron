import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdcTableWrapperComponent } from './sdc-table-wrapper.component';

describe('SdcTableWrapperComponent', () => {
  let component: SdcTableWrapperComponent;
  let fixture: ComponentFixture<SdcTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdcTableWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdcTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
