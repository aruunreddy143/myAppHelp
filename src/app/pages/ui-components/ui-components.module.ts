import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentsRoutingModule } from './ui-components-routing.module';
import { UiComponentsComponent } from './ui-components.component';

@NgModule({
  imports: [
    CommonModule,
    UiComponentsRoutingModule
  ],
  declarations: [UiComponentsComponent]
})
export class UiComponentsModule { }
