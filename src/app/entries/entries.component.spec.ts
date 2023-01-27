import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard} from "@angular/material/card";
import { MatCardSubtitle } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";

import { EntriesComponent } from './entries.component';

describe('EntriesComponent', () => {
  let component: EntriesComponent;
  let fixture: ComponentFixture<EntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntriesComponent,
        MatCard,
        MatCardSubtitle,
        MatCardContent
        ]
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
});
