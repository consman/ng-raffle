import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RaffleEntryComponent } from './raffle-entry/raffle-entry.component';
import { UserEntryComponent} from "./user-entry/user-entry.component";
import { EntriesComponent } from "./entries/entries.component";
import { AdminComponent } from "./admin/admin.component";

import { MatFormField } from "@angular/material/form-field";
import { MatToolbar } from "@angular/material/toolbar";
import { MatCard} from "@angular/material/card";
import { MatCardTitle } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";
import { MatCardSubtitle } from "@angular/material/card";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {Provider} from "@angular/core";

describe('AppComponent', () => {
  beforeEach(async(() => {
    const NG_CONTROL_PROVIDER: Provider  = {
      provide: NgControl,
      useClass: class extends NgControl {
        control = new FormControl();
        viewToModelUpdate() {}
      }};

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
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
      ]}).overrideComponent(AppComponent, {
      add: { providers: [NG_CONTROL_PROVIDER] },
    })
      .compileComponents();
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
    expect(compiled.querySelector('.content span').textContent).toContain('ng-raffle app is running!');
  });
});
