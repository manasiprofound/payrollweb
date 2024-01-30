import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEmptimecardComponent } from './staff-emptimecard.component';

describe('StaffEmptimecardComponent', () => {
  let component: StaffEmptimecardComponent;
  let fixture: ComponentFixture<StaffEmptimecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffEmptimecardComponent]
    });
    fixture = TestBed.createComponent(StaffEmptimecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
