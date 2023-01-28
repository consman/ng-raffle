import {async, ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { UserEntryComponent } from './user-entry.component';

import { MatFormField } from "@angular/material/form-field";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import { MatInputModule} from "@angular/material/input";


describe('UserEntryComponent', () => {
  let component: UserEntryComponent;
  let fixture: ComponentFixture<UserEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEntryComponent,
        MatFormField
        ],
      imports:[ FormsModule ]
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
