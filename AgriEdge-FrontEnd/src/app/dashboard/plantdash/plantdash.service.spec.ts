import { TestBed } from '@angular/core/testing';

import { PlantdashService } from './plantdash.service';

describe('PlantdashService', () => {
  let service: PlantdashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantdashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
