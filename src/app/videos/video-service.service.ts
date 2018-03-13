import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service'; // importing shared service
@Injectable()
export class VideoServiceService {
  videosUrl = 'http://localhost:3000/video';
  sessionId: string;
  pageLimit: number;
  skip: number;
  constructor(private http: HttpClient, private sharedInformation: SharedService) {
    this.sessionId = sharedInformation.getSessionId();
    this.pageLimit = 5;
    this.skip = 0;
  }

  getAllVideos(pagenumber) {
    if (pagenumber !== 0) {
      this.skip = pagenumber * this.pageLimit;
    } else {
      this.skip = pagenumber;
    }
    const url = this.videosUrl + 's?sessionId=' + this.sessionId + '&skip=' + this.skip + '&limit=' + this.pageLimit;
    this.pageLimit = 5;
    return this.http.get(url);
  }

  getSingleVideo(itemId) {
    const url = this.videosUrl + '?sessionId=' + this.sessionId + '&videoId=' + itemId;
    return this.http.get(url);
  }
}
