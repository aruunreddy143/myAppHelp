import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from "./profile.component";
import { MaterialModule } from "../../material.module";

const PAGES_COMPONENTS = [
  ProfileComponent
];

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ]
})
export class ProfileModule { }
