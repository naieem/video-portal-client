import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: '',
    //     canActivateChild: [AuthGuard],
    //     children: [
    //       { path: 'crises', component: ManageCrisesComponent },
    //       { path: 'heroes', component: ManageHeroesComponent },
    //       { path: '', component: AdminDashboardComponent }
    //     ]
    //   }
    // ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }

export const LoginRouteComponents = [LoginComponent];
