import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'; // infinite scroll library
import { VideoServiceService } from './video-service.service';
// ======================================
// getting routing and components
// ======================================
import { VideosRoutingModule, VideoRouteComponents } from './videos-routing.module';
import { VideoSidebarComponent } from './video-sidebar/video-sidebar.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    VideosRoutingModule
  ],
  declarations: [ VideoRouteComponents, VideoSidebarComponent],
  exports: [VideoSidebarComponent],
  providers: [VideoServiceService]
})
export class VideosModule { }
