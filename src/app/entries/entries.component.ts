import {Component, OnInit} from '@angular/core';
import {RaffleNamesService} from "../raffle-names.service";

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})

export class EntriesComponent implements OnInit {

  raffleEntries: String[] = new Array();

  constructor(private raffleNamesService : RaffleNamesService) {
        raffleNamesService.getRaffleNames().subscribe( data => {
          this.raffleEntries = data;
        });
  }

  ngOnInit(): void {
  }


}
