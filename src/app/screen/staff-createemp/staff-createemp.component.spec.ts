import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCreateempComponent } from './staff-createemp.component';

describe('StaffCreateempComponent', () => {
  let component: StaffCreateempComponent;
  let fixture: ComponentFixture<StaffCreateempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffCreateempComponent]
    });
    fixture = TestBed.createComponent(StaffCreateempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
