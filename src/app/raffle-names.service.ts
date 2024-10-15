import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {RaffleCompletedWrapper} from './raffle-completed';

@Injectable({
  providedIn: 'root'
})
export class RaffleNamesService {


  raffleNames : string [] = new Array();
  raffleCompletedWrapper: RaffleCompletedWrapper;
  raffleCompletedWrapperSubject: Subject<RaffleCompletedWrapper>;

  constructor() {

    this.getRaffleNamesFromStorage();
    if (!this.raffleNames || this.raffleNames.length <1 ){
      // this must be the first time the user is using the app and we start with an empty Array
      this.raffleNames = [];
      this.synchNamesToLocalStorage();
   }

   this.raffleCompletedWrapperSubject = new Subject<RaffleCompletedWrapper> ();
   this.raffleCompletedWrapper = new RaffleCompletedWrapper ();
   this.raffleCompletedWrapper.setRaffleCompleted(false);
   this.raffleCompletedWrapperSubject.next(this.raffleCompletedWrapper);
  }

  getRaffleNames(): Observable<String []> {
    return of(this.raffleNames);
 }

 getRaffleCompletedWrapperSubject(): Observable<RaffleCompletedWrapper>{
   return this.raffleCompletedWrapperSubject.asObservable();
 }

 getRaffleNamesFromStorage() {
   this.raffleNames = new Array();
   let rName =null;
   if (localStorage && localStorage.length>0) {
     for (let i = 0; i < localStorage.length; i++) {
       rName = localStorage.getItem(""+i)
       this.raffleNames.push(rName+"");
     }
   }
 }

 setRaffleCompleted(completed: boolean)  {
   this.raffleCompletedWrapper = new RaffleCompletedWrapper ();
   this.raffleCompletedWrapper.setRaffleCompleted(completed);
   this.raffleCompletedWrapperSubject.next(this.raffleCompletedWrapper);
 }

 addNameToRaffleNames( newName: string ): Observable<any> {
   this.raffleNames.push(newName);
   this.synchNamesToLocalStorage();
   return of(this.raffleNames);
 }

 clearNames() : Observable<any>  {
   let arrCount = this.raffleNames.length;
   for ( let i=0; i<arrCount; i++){
     let foo = this.raffleNames.pop();
   }
   this.synchNamesToLocalStorage();
   this.setRaffleCompleted(false);
   return of(this.raffleNames);
 }

 endRaffle(): Observable<any>{
   this.setRaffleCompleted(true);
   return of(this.raffleCompletedWrapper)
 }

 synchNamesToLocalStorage(){
   //localStorage.clear();// this won't work -- need to clear only the names.
   for (let localStorageKey in localStorage) {
     if (localStorageKey != "raffleStatus"){
       localStorage.removeItem(localStorageKey);
     }
   }
   if (this.raffleNames != null && this.raffleNames.length > 0 ){
     for (let j=0; j<this.raffleNames.length; j++){
       localStorage.setItem(""+j,this.raffleNames[j]);
     }
   }
 }


}

