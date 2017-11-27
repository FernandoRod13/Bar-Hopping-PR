import { TestBed, inject } from '@angular/core/testing';

import { TripsRepoService } from './trips-repo.service';

describe('TripsRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripsRepoService]
    });
  });

  it('should be created', inject([TripsRepoService], (service: TripsRepoService) => {
    expect(service).toBeTruthy();
  }));
});
