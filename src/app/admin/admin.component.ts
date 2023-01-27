import {Component, Input, OnInit} from '@angular/core';
import {RaffleNamesService} from "../raffle-names.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  raffleEntries: String[] = new Array;
  winners: String []  = new Array;
  winner: String ="";
  tempEntries: String[] = new Array;
  targetIndex = 0;
  raffleCompletedAdmin: boolean = false;

  constructor(private raffleNamesService : RaffleNamesService) {
    raffleNamesService.getRaffleNames().subscribe( data => {
      this.raffleEntries = data;
    });

    raffleNamesService.getRaffleCompletedWrapperSubject().subscribe( data => {
      this.raffleCompletedAdmin = data.getRaffleCompleted()
    });
  }

  ngOnInit(): void {
  }

  drawWinners() {
    let safeCount = 0;
    this.tempEntries = this.raffleEntries.slice();

    while (this.tempEntries.length > 0 && safeCount < 2000) {
      safeCount++;
      this.targetIndex = Math.floor(Math.random() * this.tempEntries.length);
      this.winner = this.findNameByIndex();
      if (this.winner !="") {
        this.moveWinner();
      }
    }

    this.raffleNamesService.endRaffle().subscribe( data => {
      this.raffleCompletedAdmin =  data.getRaffleCompleted();
    });
  }

  findNameByIndex () {
    let result: String = "";
    for (let i = 0; i < this.tempEntries.length; i++) {
      if (this.tempEntries.indexOf(this.tempEntries[i]) == this.targetIndex) {
        result = this.tempEntries[i];
        this.tempEntries[i] = "";//prepare for sort and shift later to remove this element.
        break;
      }
    }
    return result;
  }

  resetRaffle() {

    this.raffleNamesService.clearNames().subscribe( data => {
      this.raffleEntries = data;
      if (data.length<1){
        this.winners = [];
      }
    });
  }

  moveWinner() {

    if (this.winner != "") {
      this.winners.push(this.winner);
      this.tempEntries.sort();
      this.tempEntries.shift();
    }
  }
}
