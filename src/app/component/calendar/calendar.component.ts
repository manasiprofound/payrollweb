// calendar.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  weekDays: string[] = [];

  showWeek(selectedDate: string) {
    const date = new Date(selectedDate);
    const weekStart = new Date(date);
    const weekEnd = new Date(date);

    // Calculate the start of the week (Sunday)
    weekStart.setDate(date.getDate() - date.getDay());

    // Calculate the end of the week (Saturday)
    weekEnd.setDate(date.getDate() - date.getDay() + 6);

    console.log("Week start:", weekStart);
    console.log("Week end:", weekEnd);

    this.weekDays = [];
    const currentDate = new Date(weekStart);
    while (currentDate <= weekEnd) {
      const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
      const dateStr = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      this.weekDays.push(`${day}, ${dateStr}`);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    console.log("Week days:", this.weekDays);
  }
}
