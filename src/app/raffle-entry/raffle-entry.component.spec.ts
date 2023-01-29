import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RaffleEntryComponent } from './raffle-entry.component';
import { UserEntryComponent} from "../user-entry/user-entry.component";
import { EntriesComponent } from "../entries/entries.component";
import { AdminComponent } from "../admin/admin.component";

import {MatFormField} from "@angular/material/form-field";
import { MatToolbar } from "@angular/material/toolbar";
import { MatCard } from "@angular/material/card";
import { MatCardTitle } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";
import { MatCardSubtitle } from "@angular/material/card";
import {MATERIAL_MODULES} from "../app.module";

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
      imports:[MATERIAL_MODULES]
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
