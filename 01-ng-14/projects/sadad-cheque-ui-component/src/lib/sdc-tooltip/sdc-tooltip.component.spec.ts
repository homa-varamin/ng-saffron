import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdcTooltipComponent } from './sdc-tooltip.component';

describe('SdcTooltipComponent', () => {
  let component: SdcTooltipComponent;
  let fixture: ComponentFixture<SdcTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdcTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdcTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
