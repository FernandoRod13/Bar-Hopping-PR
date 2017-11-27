import { TestBed, inject } from '@angular/core/testing';

import { CustomersRepoService } from './customers-repo.service';

describe('CustomersRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersRepoService]
    });
  });

  it('should be created', inject([CustomersRepoService], (service: CustomersRepoService) => {
    expect(service).toBeTruthy();
  }));
});
