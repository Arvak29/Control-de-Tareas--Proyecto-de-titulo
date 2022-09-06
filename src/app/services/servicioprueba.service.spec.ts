import { TestBed } from '@angular/core/testing';

import { ServiciopruebaService } from './servicioprueba.service';

describe('ServiciopruebaService', () => {
  let service: ServiciopruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
