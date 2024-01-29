import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService) { }

  gotoHome() {
    this.router.navigate(['login']);
  }

  gotoSettings() {
    this.router.navigate(['staffsettings']);
  }

  gotoProfile() {
    this.router.navigate(['staffprofile']);
  }

  logout() {
    this.auth.logout();
  }
}
