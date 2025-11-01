import { Component } from '@angular/core';

import { RaffleNames } from '../raffle-names';
import {MatChipsModule} from "@angular/material/chips";

@Component({
  selector: 'app-entries',
  imports: [MatChipsModule],
  templateUrl: './entries.html',
  styleUrl: './entries.css',
})
export class Entries {
  raffleEntries: String[] = new Array();

  constructor(private raffleNamesService : RaffleNames) {
        raffleNamesService.getRaffleNames().subscribe( data => {
          this.raffleEntries = data;
        });
  }

}
