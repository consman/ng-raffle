import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Entries } from './entries';
import { MatChipsModule} from "@angular/material/chips";

describe('Entries', () => {
  let component: Entries;
  let fixture: ComponentFixture<Entries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[provideZonelessChangeDetection()],
      imports: [Entries,MatChipsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('Testing creation of component - entries.')
    expect(component).toBeTruthy();
  });
});
