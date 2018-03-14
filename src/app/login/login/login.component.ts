import { Component, OnInit, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService } from '../../shared/shared.service';
import { LoginService } from '../login.service';
import { Login } from './login-model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnChanges, OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private dataBearer: LoginService, private sharedService: SharedService) {
    this.initLoginForm();
   }

  ngOnInit() {
  }
  ngOnChanges() {
  }
  // ==============================================================
  // function to call when submit button clicked in login form
  // ==============================================================
  onSubmit() {
    const loginModel = this.loginForm.value; // getting login model from form data
    this.dataBearer.login(loginModel)
    .subscribe((data: any) => {
      console.log(data);
      this.sharedService.setSessionId(data.sessionId);
      this.router.navigate(['/videos']);
    });
  }
  // ======================================
  // Setting value of the login form
  // ======================================
  initLoginForm() {
    this.loginForm = this.fb.group({
      username: 'ali',
      password: '5f4dcc3b5aa765d61d8327deb882cf99'
    });
  }
}
