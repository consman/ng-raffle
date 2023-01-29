import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEntryComponent } from './user-entry.component';

import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import { MatFormFieldControl } from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Injectable} from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MATERIAL_MODULES} from "../app.module";

describe('UserEntryComponent', () => {
  let component: UserEntryComponent;
  let fixture: ComponentFixture<UserEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEntryComponent],
      imports:[ MATERIAL_MODULES]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
