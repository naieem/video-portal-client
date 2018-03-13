import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ======================================
// Custom modules
// ======================================
import { LoginRoutingModule, LoginRouteComponents } from './login-routing.module'; // route module

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRoutingModule
  ],
  declarations: [LoginRouteComponents]
})
export class LoginModule { }
