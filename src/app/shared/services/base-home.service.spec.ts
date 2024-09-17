import { TestBed } from '@angular/core/testing';

import { BaseHomeService } from './base-home.service';

describe('BaseHomeService', () => {
  let service: BaseHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
