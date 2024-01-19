import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffLoginComponent } from './screen/staff-login/staff-login.component';
import { StaffDashboardComponent } from './screen/staff-dashboard/staff-dashboard.component';
import { StaffCreateempComponent } from './screen/staff-createemp/staff-createemp.component';
import { EmpDashboardComponent } from './screen/emp-dashboard/emp-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'stafflogin', pathMatch: 'full'},
  { path: 'stafflogin', component: StaffLoginComponent},
  { path: 'staffhome', component: StaffDashboardComponent},
  { path: 'createemp', component: StaffCreateempComponent},
  { path: 'emphome', component: EmpDashboardComponent},
  {path: '**', component: StaffLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
