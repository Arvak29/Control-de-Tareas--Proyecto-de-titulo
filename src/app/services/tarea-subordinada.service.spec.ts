import { TestBed } from '@angular/core/testing';

import { TareaSubordinadaService } from './tarea-subordinada.service';

describe('TareaSubordinadaService', () => {
  let service: TareaSubordinadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaSubordinadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
