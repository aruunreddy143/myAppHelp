import {
  Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef,
  ComponentFactoryResolver, ChangeDetectorRef, TemplateRef, Output, EventEmitter
}
  from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger }
  from '@angular/animations';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { PasswordValidation } from "../@shared/validations/passwordValidation";

import { SharedService } from "../@shared/services/shared.service";
import { AppSettings } from "../@config/app.settings";

import { Router } from "@angular/router";
import { AlertComponentComponent } from "../@shared/messages/alert-component/alert-component.component";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({ opacity: 1, transform: 'scale(1.0)', display: 'block' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)', display: 'none' })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])


  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginBox: boolean = true;
  signUpBox: boolean = false;
  fpassword: boolean = false;
  myform;
  signUpForm;
  forgotPasswordForm;
  forgotReturnMsg;
  loginReturnMsg;
  signUpReturnMsg;

  forgorSubscription;
  loginSubscription: any;
  signUpSubscription;
  @ViewChild('alertContainer', { read: ViewContainerRef }) alertContainer: ViewContainerRef;

  constructor(private sharedService: SharedService, private router: Router,
    private fb: FormBuilder, private resolver: ComponentFactoryResolver) { }


  ngOnInit() {
    this.myform = this.fb.group({
      email: ["", [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]],
      password: ["", [
        Validators.required,
        Validators.minLength(8)
      ]]
    });

    this.signUpForm = this.fb.group({
      username: [""],
      email: ["", [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")

      ], PasswordValidation.EmailAlreadyExists(this.sharedService)],
      password: ["", [
        Validators.required,
        Validators.minLength(8)
      ]]
    });

    this.forgotPasswordForm = this.fb.group({
      email: [""]
    });
  }

  resetBoxes(resetObj) {
    this.loginBox = resetObj.loginBox;
    this.signUpBox = resetObj.signUpBox;
    this.fpassword = resetObj.fpassword;
  }


  loginForm() {

    if (this.myform.valid) {
      this.loginSubscription = this.sharedService.postJson(AppSettings.loginApi, this.myform.value).subscribe(resp => {
        if (resp.success) {
          this.sharedService.setToken(resp.token);
          this.router.navigate(['/']);
        }
        else {
          //this.loginReturnMsg = resp.error;
          this.sharedService.addDynamicComponent(resp.error, this.alertContainer, AlertComponentComponent);
        }
      });
    }
  }

  signUpSubmit() {
    if (this.signUpForm.valid) {
      this.signUpSubscription = this.sharedService.postJson(AppSettings.registerApi, this.signUpForm.value).subscribe(resp => {
        this.signUpReturnMsg = resp.message;
      });
    }
  }

  forgotPasswordSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.forgorSubscription = this.sharedService.postJson(AppSettings.forgotPasswordApi, this.forgotPasswordForm.value).subscribe(resp => {
        this.forgotReturnMsg = resp.message;
      });
    }
  }

  ngOnDestroy() {

  }


}
