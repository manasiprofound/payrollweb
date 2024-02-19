import { Component } from '@angular/core';

@Component({
  selector: 'app-weeklycalender',
  templateUrl: './weeklycalender.component.html',
  styleUrls: ['./weeklycalender.component.scss']
})
export class WeeklycalenderComponent {
  startDate: string = '';
  endDate: string = '';
  weeks: Date[][] = [];

  updateWeeks() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const weekRange: Date[][] = [];

      let currentWeek: Date[] = [];
      let currentDate = new Date(start);

      while (currentDate <= end) {
        currentWeek.push(new Date(currentDate));

        if (currentDate.getDay() === 6) {
          weekRange.push([...currentWeek]);
          currentWeek = [];
        }

        currentDate.setDate(currentDate.getDate() + 1);
      }

      if (currentWeek.length > 0) {
        weekRange.push([...currentWeek]);
      }

      this.weeks = weekRange;
    } else {
      this.weeks = [];
    }
  }
}
