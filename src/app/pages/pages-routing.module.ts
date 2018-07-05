import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'profile',
      loadChildren: './profile/profile.module#ProfileModule'
    },
    {
      path: 'pages/uicomponents',
      loadChildren: './ui-components/ui-components.module#UiComponentsModule'
    },
    {
      path: '',
      component: DashboardComponent
    }, {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
