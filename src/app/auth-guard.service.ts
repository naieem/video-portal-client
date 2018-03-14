import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';

import { SharedService } from './shared/shared.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: SharedService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    // const url = `/${route.path}`;
    // console.log(window.location.pathname);
    return this.checkLogin(window.location.pathname);
  }

  // ======================================
  // checking user logged in status
  // ======================================
  checkLogin(url: string): boolean {
    if (this.authService.sessionId) {
      this.broadCastUserLoggedInfo(true);
      return true;
    } else {
      if (this.authService.token) {
        setTimeout(() => {
          this.authService.verifyAuthenticationData(this.authService.token).subscribe((result: any) => {
            if (result && result.status === 200 && result.data) {
              this.broadCastUserLoggedInfo(false);
               this.router.navigate([url]);
              return true;
            } else {
              this.broadCastUserLoggedInfo(false);
              // Store the attempted URL for redirecting
              this.authService.redirectUrl = url;
              // Navigate to the login page with extras
              this.router.navigate(['/login']);
              return false;
            }
          });
        }, 500);
      } else {
        this.broadCastUserLoggedInfo(false);
        this.router.navigate(['/login']);
      }
    }
  }

  // ======================================
  // Broadcasting userlogged in info
  // ======================================
  broadCastUserLoggedInfo(status: boolean) {
    this.authService.setLoggedInUserInformation(status);
  }
}

