import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import {FormControl, FormGroup} from "@angular/forms";
import {RaffleNamesService} from "../raffle-names.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";

@Component({
  selector: 'app-user-entry',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule ,
    MatInputModule,
    MatChipsModule],
  templateUrl: './user-entry.component.html',
  styleUrl: './user-entry.component.css'
})
export class UserEntryComponent {
  raffleCompletedUserEntry: boolean =false;
  fg : FormGroup <any>;

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
    this.raffleNamesService.addNameToRaffleNames(this.fg.get('myinput')?.value);
    this.fg.setValue({['myinput']:''});
  }

}
