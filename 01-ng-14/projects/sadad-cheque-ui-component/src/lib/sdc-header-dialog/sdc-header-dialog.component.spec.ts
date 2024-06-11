import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdcHeaderDialogComponent } from './sdc-header-dialog.component';

describe('SdcHeaderDialogComponent', () => {
  let component: SdcHeaderDialogComponent;
  let fixture: ComponentFixture<SdcHeaderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdcHeaderDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdcHeaderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
