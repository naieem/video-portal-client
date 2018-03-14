import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SharedService } from '../../shared/shared.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  IsLoggedIn: boolean;
  subscription: Subscription;

  // ======================================
  // Constructor of the component
  // ======================================
  constructor(private router: Router, private dataBearer: SharedService) {
    this.subscription = dataBearer.isUserLoggedIn.subscribe(
      isloggedin => {
        this.IsLoggedIn = isloggedin;
      });
  }

  ngOnInit() {
  }
  // ==============================================
  // Logout function for loggin out of the portal
  // ==============================================
  logout() {
    this.dataBearer.logout().subscribe((result: any) => {
      if (result && result.status === 'success') {
        window.localStorage.removeItem('sessionId');
        this.dataBearer.setLoggedInUserInformation(false);
        this.router.navigate(['/login']);
      }
    });
  }

}
