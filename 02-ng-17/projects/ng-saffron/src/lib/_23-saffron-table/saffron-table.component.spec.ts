import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronTableComponent } from './saffron-table.component';

describe('SaffronTableComponent', () => {
  let component: SaffronTableComponent;
  let fixture: ComponentFixture<SaffronTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaffronTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaffronTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
