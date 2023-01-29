import {TestBed, async, waitForAsync} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RaffleEntryComponent } from './raffle-entry/raffle-entry.component';
import { UserEntryComponent} from "./user-entry/user-entry.component";
import { EntriesComponent } from "./entries/entries.component";
import { AdminComponent } from "./admin/admin.component";

import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import { MatToolbar } from "@angular/material/toolbar";
import { MatCard} from "@angular/material/card";
import { MatCardTitle } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";
import { MatCardSubtitle } from "@angular/material/card";
import {MATERIAL_MODULES} from "./app.module";

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, MATERIAL_MODULES
      ],
      declarations: [
        AppComponent,
        RaffleEntryComponent,
        UserEntryComponent,
        EntriesComponent,
        AdminComponent,
        MatFormField,
        MatToolbar,
        MatCard,
        MatCardTitle,
        MatCardContent,
        MatCardSubtitle
      ], providers: [ MATERIAL_MODULES]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-raffle'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-raffle');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('GDG Sacramento Raffle App');
  });
});
