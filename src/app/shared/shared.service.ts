import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  sessionId: string;
  redirectUrl: string;
  token: string;
  constructor() {
    this.token = JSON.parse(localStorage.getItem('sessionId'));
    if (this.token) {
      this.sessionId = this.token;
    }
  }
  setSessionId(key) {
    this.sessionId = key;
    localStorage.setItem('sessionId', JSON.stringify(this.sessionId));
    console.log(this.sessionId);
  }
  getSessionId() {
    this.token = JSON.parse(localStorage.getItem('sessionId'));
    if (this.token) {
    return this.sessionId;
    } else {
    return this.token;
    }
  }
}
