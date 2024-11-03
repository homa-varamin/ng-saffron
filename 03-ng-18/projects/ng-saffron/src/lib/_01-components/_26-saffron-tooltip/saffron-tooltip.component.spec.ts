import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronTooltipComponent } from './saffron-tooltip.component';

describe('SaffronTooltipComponent', () => {
  let component: SaffronTooltipComponent;
  let fixture: ComponentFixture<SaffronTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaffronTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaffronTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
