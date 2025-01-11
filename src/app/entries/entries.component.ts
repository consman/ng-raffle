import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaffleNamesService } from '../raffle-names.service';
import {MatChipsModule} from "@angular/material/chips";

@Component({
  selector: 'app-entries',
  imports: [CommonModule, MatChipsModule],
  templateUrl: './entries.component.html',
  styleUrl: './entries.component.css'
})
export class EntriesComponent {

  raffleEntries: String[] = new Array();

  constructor(private raffleNamesService : RaffleNamesService) {
        raffleNamesService.getRaffleNames().subscribe( data => {
          this.raffleEntries = data;
        });
  }
}
