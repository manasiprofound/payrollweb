import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.scss']
})
export class StaffProfileComponent {
  constructor(private router: Router, private auth: AuthService) { }
  gotoHome() {
    this.router.navigate(['staffhome']);
  }
}
