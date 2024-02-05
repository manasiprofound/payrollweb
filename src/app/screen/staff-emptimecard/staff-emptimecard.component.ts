import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-emptimecard',
  templateUrl: './staff-emptimecard.component.html',
  styleUrls: ['./staff-emptimecard.component.scss']
})
export class StaffEmptimecardComponent {
  constructor(private router: Router) { }

  timesheet(){
    this.router.navigate(['staffemptimesheet']);
  }
}
