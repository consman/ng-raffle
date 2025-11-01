import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { UserEntry } from './user-entry';

describe('UserEntry', () => {
  let component: UserEntry;
  let fixture: ComponentFixture<UserEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[provideZonelessChangeDetection()],
      imports: [UserEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('Testing creation of component - UserEntry');
    expect(component).toBeTruthy();
  });
});
