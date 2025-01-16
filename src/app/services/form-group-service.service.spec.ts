import { TestBed } from '@angular/core/testing';

import { FormGroupServiceService } from './form-group-service.service';

describe('FormGroupServiceService', () => {
  let service: FormGroupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGroupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
