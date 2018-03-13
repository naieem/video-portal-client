import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { VideoServiceService } from '../video-service.service';
import { Videos } from '../video-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos: Videos[];
  pageNumber: number;
  loading: boolean;
  constructor(private dataBearer: VideoServiceService) {
    this.pageNumber = 0;
    this.videos = [];
    this.loading = false;
  }

  ngOnInit() {
    this.getAllVideos(this.pageNumber);
  }

  // ======================================
  // Getting all videos
  // ======================================
  getAllVideos(pageNumber) {
    this.dataBearer.getAllVideos(pageNumber)
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
    const tempV: Videos[] = [];
    // tempV = _.cloneDeep(this.videos);
    _.forEach(videos, function(item) {
      item.url = 'assets/' + item.url;
      tempV.push(item);
    });
    this.loading = false;
    this.videos = this.videos.concat(tempV);
  }

  // ======================================
  // Infinite scroll handling function
  // ======================================
  onScroll (event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('On Scroll Down');
      this.loading = true;
      this.pageNumber++;
      this.getAllVideos(this.pageNumber);
    }
  }

}
