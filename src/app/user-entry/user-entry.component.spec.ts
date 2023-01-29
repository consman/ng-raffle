import {async, ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { UserEntryComponent } from './user-entry.component';

import {MATERIAL_MODULES} from "../app.module";

describe('UserEntryComponent', () => {
  let component: UserEntryComponent;
  let fixture: ComponentFixture<UserEntryComponent>;

  beforeEach(waitForAsync(() => {
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
