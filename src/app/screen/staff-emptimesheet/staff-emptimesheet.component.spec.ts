import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEmptimesheetComponent } from './staff-emptimesheet.component';

describe('StaffEmptimesheetComponent', () => {
  let component: StaffEmptimesheetComponent;
  let fixture: ComponentFixture<StaffEmptimesheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffEmptimesheetComponent]
    });
    fixture = TestBed.createComponent(StaffEmptimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
