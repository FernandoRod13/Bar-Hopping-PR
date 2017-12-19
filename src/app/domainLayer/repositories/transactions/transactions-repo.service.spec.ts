import { TestBed, inject } from '@angular/core/testing';

import { TransactionsRepoService } from './transactions-repo.service';

describe('TransactionsRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionsRepoService]
    });
  });

  it('should be created', inject([TransactionsRepoService], (service: TransactionsRepoService) => {
    expect(service).toBeTruthy();
  }));
});
