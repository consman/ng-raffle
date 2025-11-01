import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { RaffleEntry } from './raffle-entry';

describe('RaffleEntry', () => {
  let component: RaffleEntry;
  let fixture: ComponentFixture<RaffleEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[provideZonelessChangeDetection()],
      imports: [RaffleEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaffleEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('Testing creation of component - raffle-entry.')
    expect(component).toBeTruthy();
  });
});
