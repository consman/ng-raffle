import { TestBed } from '@angular/core/testing';

import { RaffleNamesService } from './raffle-names.service';

describe('RaffleNamesService', () => {
  let service: RaffleNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaffleNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
