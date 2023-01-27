import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatListModule} from "@angular/material/list";
import { UserEntryComponent } from './user-entry/user-entry.component';
import { EntriesComponent } from './entries/entries.component';
import { RaffleEntryComponent } from './raffle-entry/raffle-entry.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RaffleNamesService} from "./raffle-names.service";
import {MatInputModule} from "@angular/material/input";
import { AdminComponent } from './admin/admin.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from "@angular/material/button";

import {Injectable, NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    UserEntryComponent,
    EntriesComponent,
    RaffleEntryComponent,
    AdminComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports:[MatInputModule],
  providers: [RaffleNamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
