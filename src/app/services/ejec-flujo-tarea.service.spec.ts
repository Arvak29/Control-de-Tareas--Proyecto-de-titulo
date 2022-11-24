import { TestBed } from '@angular/core/testing';

import { EjecFlujoTareaService } from './ejec-flujo-tarea.service';

describe('EjecFlujoTareaService', () => {
  let service: EjecFlujoTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjecFlujoTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
