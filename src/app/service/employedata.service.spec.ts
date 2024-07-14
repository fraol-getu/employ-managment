import { TestBed } from '@angular/core/testing';

import { EmployedataService } from './employe.service';

describe('EmployedataService', () => {
  let service: EmployedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
