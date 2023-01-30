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

  it('should start off not being completed ', ()=>{
    expect(service.raffleCompletedWrapper.getRaffleCompleted()).toBeFalsy();
  });

  it('should clear names from the local storage',()=>{
    service.clearNames();
    let isLocalStorageEmpty = true;

    if (localStorage && localStorage.length>0) {
      for (let i = 0; i < localStorage.length; i++) {
        isLocalStorageEmpty = false;
      }
    }
    expect(isLocalStorageEmpty).toBeTruthy();
  });

  it ('should start off having  a valid raffle completed observable ',()=>{
    expect( service.getRaffleCompletedWrapperSubject()).toBeTruthy();
  });

  it('should get the raffle names from storage',()=>{
    service.clearNames();
    localStorage.setItem("0","Bob");
    service.getRaffleNamesFromStorage();
    expect(service.raffleNames[0]).toEqual('Bob');
  });

  it('can end the raffle',()=>{
    service.endRaffle();
    expect(service.raffleCompletedWrapper.getRaffleCompleted()).toBeTruthy();
  });

  it('should be able to add names to the raffle',()=>{
    service.clearNames();
    service.addNameToRaffleNames('Bob');
    expect(service.raffleNames[0]).toEqual('Bob');
  });

});
