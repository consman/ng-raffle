import {async, ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { MatCard} from "@angular/material/card";
import { MatCardSubtitle } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";

import { EntriesComponent } from './entries.component';
import {MATERIAL_MODULES} from "../app.module";

describe('EntriesComponent', () => {
  let component: EntriesComponent;
  let fixture: ComponentFixture<EntriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntriesComponent,
        MatCard,
        MatCardSubtitle,
        MatCardContent
        ],
      imports:[MATERIAL_MODULES]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not get some raffle names during a unit test',()=>{
    expect(component.raffleEntries.length).toEqual(0);
  });
});
