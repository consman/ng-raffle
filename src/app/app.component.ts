import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaffleEntryComponent } from './raffle-entry/raffle-entry.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RaffleEntryComponent, MatFormFieldModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-raffle';
}
