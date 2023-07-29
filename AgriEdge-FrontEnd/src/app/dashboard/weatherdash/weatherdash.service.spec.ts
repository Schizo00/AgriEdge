import { TestBed } from '@angular/core/testing';

import { WeatherdashService } from './weatherdash.service';

describe('WeatherdashService', () => {
  let service: WeatherdashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherdashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
