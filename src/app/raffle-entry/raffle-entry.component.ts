import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raffle-entry',
  templateUrl: './raffle-entry.component.html',
  styleUrls: ['./raffle-entry.component.css']
})
export class RaffleEntryComponent implements OnInit {

  constructor() {
    console.log( ' The ng-raffle app is running.');
  }

  ngOnInit(): void {
  }

}
