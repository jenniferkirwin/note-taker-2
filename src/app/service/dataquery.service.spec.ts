import { TestBed } from '@angular/core/testing';

import { DataqueryService } from './dataquery.service';

describe('DataqueryService', () => {
  let service: DataqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
