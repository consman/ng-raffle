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

  it('should not complete the raffle in a unit test',()=>{
    expect(component.raffleCompletedUserEntry).toBeFalsy();
  });

  it('should have a form control in the form group called myinput and be blank',()=>{
    expect(component.fg.get('myinput')?.value).toBeFalsy();
  });

  it('should add an entry',()=>{
    component.fg.setValue({['myinput']:'ThomasAmsler'});
    component.addEntry();
    expect(component.fg.get('myinput')?.value).toBeFalsy();
  });

});
