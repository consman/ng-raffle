import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEntryComponent } from './user-entry.component';

import { MatFormField } from "@angular/material/form-field";
import { MatFormFieldControl } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import {Injectable} from "@angular/core";

describe('UserEntryComponent', () => {
  let component: UserEntryComponent;
  let fixture: ComponentFixture<UserEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEntryComponent,
        MatFormField
        ],
      imports:[ FormsModule]
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
