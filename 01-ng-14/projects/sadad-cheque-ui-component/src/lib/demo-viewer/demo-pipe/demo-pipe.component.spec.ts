import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPipeComponent } from './demo-pipe.component';

describe('DemoPipeComponent', () => {
  let component: DemoPipeComponent;
  let fixture: ComponentFixture<DemoPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
