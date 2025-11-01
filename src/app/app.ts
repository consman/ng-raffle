import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

import { RaffleEntry } from './raffle-entry/raffle-entry';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RaffleEntry, MatFormFieldModule, MatToolbarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = signal('ng-raffle');
}
