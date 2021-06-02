import { TestBed } from '@angular/core/testing';

import { WebsiteNavigationService } from './website-navigation.service';

describe('WebsiteNavigationService', () => {
  let service: WebsiteNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
