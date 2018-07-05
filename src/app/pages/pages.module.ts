import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from "../material.module";
import { FullScreenDirective } from "../@shared/directives/full-screen.directive";

const PAGES_COMPONENTS = [
  PagesComponent, DashboardComponent, FullScreenDirective

];

@NgModule({
  imports: [
    PagesRoutingModule,
    MaterialModule,
    CommonModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
