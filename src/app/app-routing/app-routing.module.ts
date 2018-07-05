import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { ResetComponent } from "../reset/reset.component";
import { ForgotPasswordComponent } from "../auth/forgot-password/forgot-password.component";
import { AuthGuard, ActivatechildGuard } from "../@core/guards/auth.guard";


const routes: Routes = [
  /* {
     path: '',
     component: DashboardComponent, 
     children: [
       { path: 'dash', component: DashComponent, canActivateChild: [ActivatechildGuard] },
       {
         path: 'profile',
         loadChildren: '../pages/profile/profile.module#ProfileModule'
       },
       { path: '', redirectTo: '', pathMatch: 'full' }
     ]
   },*/

  {
    path: '',
    loadChildren: '../pages/pages.module#PagesModule', canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset/:token',
    component: ResetComponent
  },
  {
    path: 'forgotPassword',
    loadChildren: "../auth/forgot-password/forgot-password.module#ForgotPasswordModule"
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
