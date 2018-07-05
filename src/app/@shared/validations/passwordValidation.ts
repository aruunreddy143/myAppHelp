import { AbstractControl } from '@angular/forms';
import { SharedService } from "../services/shared.service";
import { AppSettings } from "../../@config/app.settings";

export class PasswordValidation {
    constructor() { }
    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true })
        } else {
            AC.get('confirmPassword').setErrors(null)
            return null
        }
    }
    debouncer;
    static EmailAlreadyExists(sharedService: SharedService) {
        return (control: AbstractControl) => {
            return new Promise(resolve => {
                sharedService.postJson(AppSettings.emailAlreadyExits, { email: control.value }).subscribe((res) => {
                    return !res.success ? resolve(null) : resolve({ 'emailTaken': true });
                }, (err) => {
                    resolve({ 'emailTaken': true });
                });

            });
        }
    }
}