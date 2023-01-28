import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RaffleEntryComponent } from './raffle-entry.component';
import { UserEntryComponent} from "../user-entry/user-entry.component";
import { EntriesComponent } from "../entries/entries.component";
import { AdminComponent } from "../admin/admin.component";

import { MatFormField } from "@angular/material/form-field";
import { MatToolbar } from "@angular/material/toolbar";
import { MatCard } from "@angular/material/card";
import { MatCardTitle } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";
import { MatCardSubtitle } from "@angular/material/card";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {Provider} from "@angular/core";

describe('RaffleEntryComponent', () => {
  let component: RaffleEntryComponent;
  let fixture: ComponentFixture<RaffleEntryComponent>;

  beforeEach(async(() => {
    const NG_CONTROL_PROVIDER: Provider  = {
      provide: NgControl,
      useClass: class extends NgControl {
        control = new FormControl();
        viewToModelUpdate() {}
      }};
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
      imports:[ FormsModule ]
    }).overrideComponent(RaffleEntryComponent, {
      add: { providers: [NG_CONTROL_PROVIDER] },
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
