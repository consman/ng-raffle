import {Component, OnInit} from '@angular/core';
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
  fg : FormGroup;

  constructor(private raffleNamesService : RaffleNamesService) {
     raffleNamesService.getRaffleCompletedWrapperSubject().subscribe( data => {
      this.raffleCompletedUserEntry = data.getRaffleCompleted()
    });
     this.fg = new FormGroup({
       myinput: new FormControl()
     });
  }

  ngOnInit(): void {
  }

  addEntry(){
    this.raffleNamesService.addNameToRaffleNames(this.newName);
    this.newName='';
  }


}
