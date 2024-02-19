import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {

  selectedDate: string = '';
  dates: Date[] = [];
  dateData: { [key: string]: string } = {};

  updateWeekDates() {
    if (this.selectedDate) {
      const selected = new Date(this.selectedDate);
      const dayOfWeek = selected.getDay();
      const startOfWeek = new Date(selected);
      startOfWeek.setDate(selected.getDate() - dayOfWeek);

      this.dates = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        this.dates.push(date);
      }
    } else {
      this.dates = [];
    }
  }
}

// Example usage:
// const startDate = '2024-02-01';
// const endDate = '2024-02-05';
// const dates = getDatesArray(startDate, endDate);
