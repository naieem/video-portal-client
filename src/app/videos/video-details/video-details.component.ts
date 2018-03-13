import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'lodash';

import { VideoServiceService } from '../video-service.service';
import { Videos } from '../video-model';
@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  video: Videos; // for storing single videos
  videos: Videos[]; // for storing all videos
  constructor( private route: ActivatedRoute,
    private router: Router, private dataBearer: VideoServiceService) {
      // ======================================
      // OnRouteChange information update
      // ======================================
      this.onRouteChangeUpdate();
    }
  // ======================================
  // OnRouteChange information update
  // ======================================
  onRouteChangeUpdate() {
    this.route.url.subscribe(url => {
      this.getsingleVideo(url[1].path);
    });
  }

  // ======================================
  // Init function
  // ======================================
  ngOnInit() {
     const itemid = this.route.snapshot.params['videoId'];
     this.getsingleVideo(itemid);
  }

  // =======================================================
  // getting single data for showing in the details secton
  // =======================================================
  getsingleVideo(itemid) {
    this.dataBearer.getSingleVideo(itemid).subscribe((result: any) => {
      result.data.url = 'assets/' + result.data.url;
      this.video = result.data;
      this.getallVideos();
    });
  }

  // ======================================
  // Getting all videos for sidebar
  // ======================================
  getallVideos() {
    this.dataBearer.getAllVideos()
    .subscribe((result: any) => {
      console.log(result);
      // ----------- sending for adding assets folders url with the file  ------------//
      this.denormalizeVideoUrl(result.data);
    });
  }

  /**
   * adding assets url with the videos url
   * @param array of videos
   */
  denormalizeVideoUrl(videos) {
    _.forEach(videos, function(item) {
      item.url = 'assets/' + item.url;
    });
    this.videos = videos;
  }

}
