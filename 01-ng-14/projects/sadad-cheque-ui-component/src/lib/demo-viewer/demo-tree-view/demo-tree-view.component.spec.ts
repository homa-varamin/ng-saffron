import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTreeViewComponent } from './demo-tree-view.component';

describe('DemoTreeViewComponent', () => {
  let component: DemoTreeViewComponent;
  let fixture: ComponentFixture<DemoTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
