import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklycalenderComponent } from './weeklycalender.component';

describe('WeeklycalenderComponent', () => {
  let component: WeeklycalenderComponent;
  let fixture: ComponentFixture<WeeklycalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklycalenderComponent]
    });
    fixture = TestBed.createComponent(WeeklycalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
