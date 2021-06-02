import { TestBed } from '@angular/core/testing';

import { CheatsheetsDataService } from './cheatsheets-data.service';

describe('CheatsheetsDataService', () => {
  let service: CheatsheetsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheatsheetsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
