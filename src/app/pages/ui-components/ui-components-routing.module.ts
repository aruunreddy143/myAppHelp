import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponentsComponent } from "./ui-components.component";

const routes: Routes = [
  {
    path: '',
    component: UiComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiComponentsRoutingModule { }
