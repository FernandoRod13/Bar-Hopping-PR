import { TestBed, inject } from '@angular/core/testing';

import { PartnersRepoService } from './partners-repo.service';

describe('PartnersRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartnersRepoService]
    });
  });

  it('should be created', inject([PartnersRepoService], (service: PartnersRepoService) => {
    expect(service).toBeTruthy();
  }));
});
