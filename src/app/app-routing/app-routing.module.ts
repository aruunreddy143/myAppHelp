import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {EsriComponent} from "../maps/esri/esri.component";
import { DashComponent } from '../dash/dash.component';

const routes: Routes = [  
  {
      path: '',
      component: DashComponent
  },
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
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
