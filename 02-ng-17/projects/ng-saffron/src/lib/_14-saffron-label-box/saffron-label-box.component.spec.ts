import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronLabelBoxComponent } from './saffron-label-box.component';

describe('SaffronLabelBoxComponent', () => {
  let component: SaffronLabelBoxComponent;
  let fixture: ComponentFixture<SaffronLabelBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaffronLabelBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaffronLabelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
