import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {
  loginUrl = 'http://localhost:3000/user/auth';
  constructor(private http: HttpClient) {
  }

  login(loginModel) {
    return this.http.post(this.loginUrl, loginModel);
  }
}
