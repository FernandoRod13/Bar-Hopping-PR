import { TestBed, inject } from '@angular/core/testing';

import { TripSpecificationsService } from './trip-specifications.service';

describe('TripSpecificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripSpecificationsService]
    });
  });

  it('should be created', inject([TripSpecificationsService], (service: TripSpecificationsService) => {
    expect(service).toBeTruthy();
  }));
});
