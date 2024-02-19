import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffLoginComponent } from './screen/staff-login/staff-login.component';
import { StaffDashboardComponent } from './screen/staff-dashboard/staff-dashboard.component';
import { StaffCreateempComponent } from './screen/staff-createemp/staff-createemp.component';
import { EmpDashboardComponent } from './screen/emp-dashboard/emp-dashboard.component';
import { StaffProfileComponent } from './screen/staff-profile/staff-profile.component';
import { StaffSettingsComponent } from './screen/staff-settings/staff-settings.component';
import { StaffEmptimecardComponent } from './screen/staff-emptimecard/staff-emptimecard.component';
import { StaffEmptimesheetComponent } from './screen/staff-emptimesheet/staff-emptimesheet.component';

const routes: Routes = [
  
  {path: 'staffprofile', component: StaffProfileComponent},
  {path: 'staffsettings', component: StaffSettingsComponent},
  { path: 'stafflogin', component: StaffLoginComponent},
  { path: 'staffhome', component: StaffDashboardComponent},
  { path: 'createemp', component: StaffCreateempComponent},
  { path: 'emphome', component: EmpDashboardComponent},
  { path: 'staffemptimecard', component: StaffEmptimecardComponent},
  { path: 'staffemptimesheet', component: StaffEmptimesheetComponent},
  {path: '**', component: StaffDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
