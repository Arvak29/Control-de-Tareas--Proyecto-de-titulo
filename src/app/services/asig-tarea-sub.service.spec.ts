import { TestBed } from '@angular/core/testing';

import { AsigTareaSubService } from './asig-tarea-sub.service';

describe('AsigTareaSubService', () => {
  let service: AsigTareaSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsigTareaSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
