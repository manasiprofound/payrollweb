import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-staff-createemp',
  templateUrl: './staff-createemp.component.html',
  styleUrls: ['./staff-createemp.component.scss']
})
export class StaffCreateempComponent {

  constructor(private router: Router, private auth: AuthService ) { }

  gotoHome() {
    this.router.navigate(['staffhome']);
  }
}
