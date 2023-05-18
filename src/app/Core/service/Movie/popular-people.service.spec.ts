import { TestBed } from '@angular/core/testing';

import { PopularPeopleService } from './popular-people.service';

describe('PopularPeopleService', () => {
  let service: PopularPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
