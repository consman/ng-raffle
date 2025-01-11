import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleEntryComponent } from './raffle-entry.component';
import { EntriesComponent } from '../entries/entries.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('RaffleEntryComponent', () => {
  let component: RaffleEntryComponent;
  let fixture: ComponentFixture<RaffleEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffleEntryComponent,EntriesComponent,BrowserAnimationsModule]
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
