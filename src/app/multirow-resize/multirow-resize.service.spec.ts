import { TestBed } from '@angular/core/testing';

import { MultirowResizeService } from './multirow-resize.service';

describe('MultirowResizeService', () => {
  let service: MultirowResizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultirowResizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
