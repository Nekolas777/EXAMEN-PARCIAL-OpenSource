import { TestBed } from '@angular/core/testing';

import { MentalApiService } from './mental-api.service';

describe('MentalApiService', () => {
  let service: MentalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
