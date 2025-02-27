import { TestBed } from '@angular/core/testing';

import { NgSaffronService } from './ng-saffron.service';

describe('NgSaffronService', () => {
  let service: NgSaffronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSaffronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
