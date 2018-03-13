import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedService } from '../shared/shared.service';

import { RootComponentComponent } from './root-component/root-component.component';
import { AppRoutingModule, RouteComponent  } from '../app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [RootComponentComponent, RouteComponent],
  exports: [RootComponentComponent],
  providers: [SharedService]
})
export class RootModuleModule { }
