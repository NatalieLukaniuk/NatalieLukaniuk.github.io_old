/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewportService } from './viewport.service';

describe('Service: Viewport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewportService]
    });
  });

  it('should ...', inject([ViewportService], (service: ViewportService) => {
    expect(service).toBeTruthy();
  }));
});
