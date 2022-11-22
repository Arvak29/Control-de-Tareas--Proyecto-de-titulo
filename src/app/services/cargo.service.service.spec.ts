import { TestBed } from '@angular/core/testing';

import { CargoServiceService } from './cargo.service';

describe('CargoService', () => {
  let service: CargoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
