import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { HttpModule, Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/*services*/
import { SharedService } from "./@shared/services/shared.service";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ResetComponent } from './reset/reset.component';

import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { AlertComponentComponent } from './@shared/messages/alert-component/alert-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    ForgotPasswordComponent,
    AlertComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,

  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [AlertComponentComponent],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
