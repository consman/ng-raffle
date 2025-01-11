import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import { UserEntryComponent } from '../user-entry/user-entry.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { EntriesComponent } from '../entries/entries.component';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-raffle-entry',
  imports: [CommonModule, MatToolbarModule, MatCardModule, UserEntryComponent, MatFormFieldModule, EntriesComponent,AdminComponent],
  templateUrl: './raffle-entry.component.html',
  styleUrl: './raffle-entry.component.css'
})
export class RaffleEntryComponent {
  constructor() {
    console.log( ' The v19 ng-raffle app ( raffle-entry component ) is running.');
  }
}
