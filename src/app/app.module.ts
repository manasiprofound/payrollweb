import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffLoginComponent } from './screen/staff-login/staff-login.component';
import { StaffDashboardComponent } from './screen/staff-dashboard/staff-dashboard.component';
import { StaffCreateempComponent } from './screen/staff-createemp/staff-createemp.component';
import { EmpDashboardComponent } from './screen/emp-dashboard/emp-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffLoginComponent,
    StaffDashboardComponent,
    StaffCreateempComponent,
    EmpDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
