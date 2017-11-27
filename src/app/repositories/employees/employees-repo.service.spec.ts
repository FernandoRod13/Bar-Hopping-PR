import { TestBed, inject } from '@angular/core/testing';

import { EmployeesRepoService } from './employees-repo.service';

describe('EmployeesRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesRepoService]
    });
  });

  it('should be created', inject([EmployeesRepoService], (service: EmployeesRepoService) => {
    expect(service).toBeTruthy();
  }));
});
