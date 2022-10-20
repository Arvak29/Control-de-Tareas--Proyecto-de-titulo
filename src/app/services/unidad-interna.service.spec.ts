import { TestBed } from '@angular/core/testing';

import { UnidadInternaService } from './unidad-interna.service';

describe('UnidadInternaService', () => {
  let service: UnidadInternaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadInternaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
