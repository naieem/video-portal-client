import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  sessionId: string;
  redirectUrl: string;
  token: string;

  constructor(private http: HttpClient) {
    this.token = JSON.parse(localStorage.getItem('sessionId'));
    /**
     * Checking if token is valid or sessionid is set
     * @param obj
     */
    if (this.token) {
      this.verifyAuthenticationData(this.token).subscribe((result: any) => {
        if (result && result.status === 200) {
          this.sessionId = result.data.activeSession;
        } else {
          this.sessionId = null;
        }
      });
    } else {
      this.sessionId = null;
    }
  }

   // logged in user information observable
   private loggedInUserInformation = new Subject<boolean>();

   // logged in user information streams
   isUserLoggedIn = this.loggedInUserInformation.asObservable();

  // ======================================
  // setting users logged in informtion
  // ======================================
  setLoggedInUserInformation(isLoggedIn: boolean) {
    this.loggedInUserInformation.next(isLoggedIn);
  }
  // ======================================
  // verifying user authentication data
  // ======================================
  verifyAuthenticationData(sessionId) {
    return this.http.get('http://localhost:3000/user/checkAuthentication?sessionId=' + sessionId);
  }
  // ======================================
  // Setting session id
  // ======================================
  setSessionId(key) {
    this.sessionId = key;
    localStorage.setItem('sessionId', JSON.stringify(this.sessionId));
    console.log(this.sessionId);
  }
  // ======================================
  // Return session id
  // ======================================
  getSessionId() {
      return this.sessionId;
  }
  // ======================================
  // logging out user from portal
  // ======================================
  logout() {
    return this.http.get('http://localhost:3000/user/logout?sessionId=' + this.sessionId);
  }

}
