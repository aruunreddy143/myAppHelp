import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';



import { SharedService } from "../@shared/services/shared.service";
import { AppSettings } from "../@config/app.settings";

import { Router } from "@angular/router";

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
export class LoginComponent implements OnInit {
  loginBox: boolean = true;
  signUpBox: boolean = false;
  fpassword: boolean = false;
  myform;
  signUpForm;
  forgotPasswordForm;
  forgotReturnMsg;
  loginReturnMsg;
  signUpReturnMsg;
  constructor(private sharedService: SharedService, private router: Router, private fb: FormBuilder) { }

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
      ]],
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
      this.sharedService.postJson(AppSettings.loginApi, this.myform.value).subscribe(resp => {
        if (resp.success) {
          this.router.navigate(['dash']);
        }
        else {
          this.loginReturnMsg = resp.error;
        }
      });
    }
  }

  signUpSubmit() {
    if (this.signUpForm.valid) {
      this.sharedService.postJson(AppSettings.registerApi, this.signUpForm.value).subscribe(resp => {
        this.signUpReturnMsg = resp.message;
      });
    }
  }

  forgotPasswordSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.sharedService.postJson(AppSettings.forgotPasswordApi, this.forgotPasswordForm.value).subscribe(resp => {
        this.forgotReturnMsg = resp.message;
      });
    }
  }

}
