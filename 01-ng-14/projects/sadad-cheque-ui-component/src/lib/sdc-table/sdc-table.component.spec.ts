import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdcTableComponent } from './sdc-table.component';

describe('SdcTableComponent', () => {
  let component: SdcTableComponent;
  let fixture: ComponentFixture<SdcTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdcTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
