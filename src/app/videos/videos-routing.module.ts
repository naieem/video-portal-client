import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const videoRoutes: Routes = [
  {
    path: '',
    component: VideoListComponent,
    canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: '',
    //     canActivateChild: [AuthGuard],
    //     children: [
    //       { path: 'details', component: VideoDetailsComponent }
    //     ]
    //   }
    // ]
  },
  {
    path: 'details/:videoId',
    component: VideoDetailsComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(videoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VideosRoutingModule { }

export const VideoRouteComponents = [VideoListComponent, VideoDetailsComponent];
