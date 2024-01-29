import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffLoginComponent } from './screen/staff-login/staff-login.component';
import { StaffDashboardComponent } from './screen/staff-dashboard/staff-dashboard.component';
import { StaffCreateempComponent } from './screen/staff-createemp/staff-createemp.component';
import { EmpDashboardComponent } from './screen/emp-dashboard/emp-dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { StaffSettingsComponent } from './screen/staff-settings/staff-settings.component';
import { StaffProfileComponent } from './screen/staff-profile/staff-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffLoginComponent,
    StaffDashboardComponent,
    StaffCreateempComponent,
    EmpDashboardComponent,
    HeaderComponent,
    FooterComponent,
    StaffSettingsComponent,
    StaffProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
