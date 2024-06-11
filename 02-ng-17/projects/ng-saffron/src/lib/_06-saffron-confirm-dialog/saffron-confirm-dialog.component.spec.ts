import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronConfirmDialogComponent } from './saffron-confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  let component: SaffronConfirmDialogComponent;
  let fixture: ComponentFixture<SaffronConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaffronConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaffronConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
