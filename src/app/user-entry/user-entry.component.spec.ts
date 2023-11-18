import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { UserEntryComponent } from './user-entry.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule} from "@angular/material/chips";


describe('UserEntryComponent', () => {
  let component: UserEntryComponent;
  let fixture: ComponentFixture<UserEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, UserEntryComponent, 
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule ,
        MatInputModule,
        BrowserAnimationsModule,
        MatChipsModule]
    })
    .compileComponents();
    
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
