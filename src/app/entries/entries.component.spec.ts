import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesComponent } from './entries.component';

import {MatChipsModule} from "@angular/material/chips";

describe('EntriesComponent', () => {
  let component: EntriesComponent;
  let fixture: ComponentFixture<EntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntriesComponent,MatChipsModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
