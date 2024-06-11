import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMessageServiceComponent } from './demo-message-service.component';

describe('DemoMessageServiceComponent', () => {
  let component: DemoMessageServiceComponent;
  let fixture: ComponentFixture<DemoMessageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoMessageServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoMessageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
