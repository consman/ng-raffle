import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import { UserEntry } from '../user-entry/user-entry';
import { MatFormFieldModule } from "@angular/material/form-field";
import { Entries } from '../entries/entries';
import { Admin } from '../admin/admin';

@Component({
  selector: 'app-raffle-entry',
  imports: [MatToolbarModule, MatCardModule, UserEntry, MatFormFieldModule, Entries,Admin],
  templateUrl: './raffle-entry.html',
  styleUrl: './raffle-entry.css',
})
export class RaffleEntry {
constructor() {
    console.log( ' The v20 ng-raffle app ( raffle-entry component ) is running.');
  }
}
