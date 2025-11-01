import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { RaffleNames } from './raffle-names';

describe('RaffleNames', () => {
  let service: RaffleNames;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideZonelessChangeDetection()]
    });
    service = TestBed.inject(RaffleNames);
  });

  it('should be created', () => {
    console.log('Testing service - raffle names');
    expect(service).toBeTruthy();
  });
});
