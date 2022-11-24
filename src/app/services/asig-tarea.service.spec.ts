import { TestBed } from '@angular/core/testing';

import { AsigTareaService } from './asig-tarea.service';

describe('AsigTareaService', () => {
  let service: AsigTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsigTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
