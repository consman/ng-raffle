import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RaffleEntryComponent } from './raffle-entry.component';
import { UserEntryComponent} from "../user-entry/user-entry.component";
import { EntriesComponent } from "../entries/entries.component";
import { AdminComponent } from "../admin/admin.component";

import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import { MatToolbar } from "@angular/material/toolbar";
import { MatCard } from "@angular/material/card";
import { MatCardTitle } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";
import { MatCardSubtitle } from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('RaffleEntryComponent', () => {
  let component: RaffleEntryComponent;
  let fixture: ComponentFixture<RaffleEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaffleEntryComponent,
        MatFormField,
        MatToolbar,
        MatCard,
        MatCardTitle,
        MatCardContent,
        UserEntryComponent,
        EntriesComponent,
        AdminComponent,
        MatCardSubtitle
      ],
      imports:[ FormsModule, ReactiveFormsModule, MatFormFieldModule , MatInputModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
