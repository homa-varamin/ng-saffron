import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronPrimeTreeViewComponent } from './saffron-tree-view.component';

describe('SaffronPrimeTreeViewComponent', () => {
  let component: SaffronPrimeTreeViewComponent;
  let fixture: ComponentFixture<SaffronPrimeTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaffronPrimeTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaffronPrimeTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
