import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EsriComponent } from './maps/esri/esri.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { DashComponent } from './dash/dash.component';
import {MaterialModule} from './material.module';
import { LoginComponent } from './login/login.component';
import {HttpModule, Http, Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/*services*/
import {SharedService} from "./@shared/services/shared.service";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ResetComponent } from './reset/reset.component';

import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EsriComponent,
    MyNavComponent,
    DashComponent,
    LoginComponent,
    ResetComponent,
    ForgotPasswordComponent
    
    
    
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
    MaterialModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
    
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
