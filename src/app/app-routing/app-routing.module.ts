import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { EsriComponent } from "../maps/esri/esri.component";
import { LoginComponent } from "../login/login.component";
import { DashComponent } from "../dash/dash.component";
import { ResetComponent } from "../reset/reset.component";
import { ForgotPasswordComponent } from "../auth/forgot-password/forgot-password.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'dash', component: DashComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset/:token',
    component: ResetComponent
  },
  { path: 'forgotPassword', component: ForgotPasswordComponent },

  {
    path: 'maps',
    component: EsriComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
