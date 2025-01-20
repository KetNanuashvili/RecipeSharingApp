import { TestBed } from '@angular/core/testing';

import { FilterRecipesPipeService } from './filter-recipes.pipe.service';

describe('FilterRecipesPipeService', () => {
  let service: FilterRecipesPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterRecipesPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
