import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';

//import {RaffleNamesService} from "../raffle-names.service";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComponent,MatCardModule,MatListModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should draw winners ',()=>{
    component.raffleEntries = ['Oleg','Al','Kyle','Magendiran','Ryan'];
    component.drawWinners();
    expect(component.winner).toBeTruthy();
    expect(component.winners.length).toEqual(5);

  });

  it('should find names by index ',()=>{
    component.tempEntries = ['Oleg','Al','Kyle','Magendiran','Ryan'];

    component.targetIndex = 0;
    expect(component.findNameByIndex()).toBe('Oleg');

    component.targetIndex = 4;
    expect(component.findNameByIndex()).toBe('Ryan');
  });

  it('should reset the raffle',()=>{
    component.winners = ['Oleg','Al','Kyle','Magendiran','Ryan'];
    component.resetRaffle();
    expect(component.winners).toEqual([]);
  });

  it('should be able to move winners ',()=>{
    component.tempEntries = [];
    component.winner = 'Ryan';
    component.winners = [];
    component.tempEntries = ['Oleg','Al','Kyle','Magendiran','Ryan'];
    component.moveWinner();
    expect(component.winners[0]).toEqual('Ryan');
    expect(component.tempEntries[1]).toEqual('Magendiran'); //would new be 2nd because of sorting and shifting
  });

});
