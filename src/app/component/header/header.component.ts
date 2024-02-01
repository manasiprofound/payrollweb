import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService, ) { }

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

  // myFunction(): void {
  //   const dropdown = document.getElementById("myDropdown");
  //   if (dropdown) {
  //     dropdown.classList.toggle("show");
  //   }
  // }

  // closeDropdown(event: Event): void {
  //   if (event.target instanceof Element && !event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }

}
  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
  
  // // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
// 
