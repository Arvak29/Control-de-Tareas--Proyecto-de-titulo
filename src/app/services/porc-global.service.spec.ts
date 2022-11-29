import { TestBed } from '@angular/core/testing';

import { PorcGlobalService } from './porc-global.service';

describe('PorcGlobalService', () => {
  let service: PorcGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorcGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});