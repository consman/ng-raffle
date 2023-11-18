import { ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RaffleEntryComponent } from './raffle-entry.component';
import { EntriesComponent } from '../entries/entries.component';

//import {RaffleNamesService} from "../raffle-names.service";

describe('RaffleEntryComponent', () => {
  let component: RaffleEntryComponent;
  let fixture: ComponentFixture<RaffleEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffleEntryComponent,BrowserAnimationsModule,EntriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaffleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
