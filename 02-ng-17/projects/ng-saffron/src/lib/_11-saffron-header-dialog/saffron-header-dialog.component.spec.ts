import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronHeaderDialogComponent } from './saffron-header-dialog.component';

describe('SaffronHeaderDialogComponent', () => {
  let component: SaffronHeaderDialogComponent;
  let fixture: ComponentFixture<SaffronHeaderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaffronHeaderDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaffronHeaderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
