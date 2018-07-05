import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from "../../@shared/services/shared.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private sharedService: SharedService, public router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.sharedService.isLoggedIn()) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;

  }
}

export class ActivatechildGuard implements CanActivateChild {
  constructor(private router: Router, private sharedService: SharedService) {
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('redirecting home due to access Rights..');
    if (!this.sharedService.isLoggedIn()) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}  
