import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdcPrimeTreeViewComponent } from './sdc-prime-tree-view.component';

describe('SdcPrimeTreeViewComponent', () => {
  let component: SdcPrimeTreeViewComponent;
  let fixture: ComponentFixture<SdcPrimeTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdcPrimeTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdcPrimeTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
