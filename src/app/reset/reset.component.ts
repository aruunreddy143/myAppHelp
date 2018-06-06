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
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SharedService } from "../@shared/services/shared.service";
import { AppSettings } from "../@config/app.settings";
import { PasswordValidation } from "../@shared/validations/passwordValidation";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  myform: FormGroup;
  loginBox: boolean = true;
  resetReturnMsg;
  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    this.myform = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
        validator: PasswordValidation.MatchPassword // your validation method
      })
  }

  loginForm() {
    if (this.myform.valid) {
      this.myform.value.resetPasswordToken = this.activatedRoute.snapshot.paramMap.get('token');

      this.sharedService.postJson(AppSettings.resetPasswordApi, this.myform.value).subscribe(resp => {
        console.log(resp);
        if (resp.success) {
          this.resetReturnMsg=true;
        }
        //this.router.navigate(['dash']);
      });

    }
  }

}
