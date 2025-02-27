import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSaffronComponent } from './ng-saffron.component';

describe('NgSaffronComponent', () => {
  let component: NgSaffronComponent;
  let fixture: ComponentFixture<NgSaffronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSaffronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSaffronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
