import { TestBed, inject } from '@angular/core/testing';

import { LocationDataTransfeerService } from './location-data-transfeer.service';

describe('LocationDataTransfeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationDataTransfeerService]
    });
  });

  it('should be created', inject([LocationDataTransfeerService], (service: LocationDataTransfeerService) => {
    expect(service).toBeTruthy();
  }));
});
