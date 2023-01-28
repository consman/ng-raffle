import {Component, Injectable, OnInit} from '@angular/core';
import {RaffleNamesService} from "../raffle-names.service";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})

export class UserEntryComponent implements OnInit {

  raffleCompletedUserEntry: boolean =false;
  newName:string='';

  constructor(private raffleNamesService : RaffleNamesService) {

    console.log( ' UserEntryComponent created...');

     raffleNamesService.getRaffleCompletedWrapperSubject().subscribe( data => {
      this.raffleCompletedUserEntry = data.getRaffleCompleted()
    });

  }

  ngOnInit(): void {
  }

  addEntry(){
    this.raffleNamesService.addNameToRaffleNames(this.newName);
    this.newName='';
  }


}
