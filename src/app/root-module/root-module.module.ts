import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// ======================================
// Customer module and components
// ======================================
import { LogoutModule } from '../logout/logout.module';
import { SharedService } from '../shared/shared.service';

import { RootComponentComponent } from './root-component/root-component.component';
import { AppRoutingModule, RouteComponent  } from '../app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    LogoutModule,
    AppRoutingModule
  ],
  declarations: [RootComponentComponent, RouteComponent],
  exports: [RootComponentComponent],
  providers: [SharedService]
})
export class RootModuleModule { }
