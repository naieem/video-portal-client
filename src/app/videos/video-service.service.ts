import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service'; // importing shared service
@Injectable()
export class VideoServiceService {
  videosUrl = 'http://localhost:3000/video';
  sessionId: string;
  pageLimit = 5;
  constructor(private http: HttpClient, private sharedInformation: SharedService) {
    this.sessionId = sharedInformation.getSessionId();
  }

  getAllVideos(pagenumber) {
    if (pagenumber !== 0) {
      this.pageLimit = (pagenumber + 1) * this.pageLimit;
    }
    const url = this.videosUrl + 's?sessionId=' + this.sessionId + '&skip=0&limit=' + this.pageLimit;
    return this.http.get(url);
  }

  getSingleVideo(itemId) {
    const url = this.videosUrl + '?sessionId=' + this.sessionId + '&videoId=' + itemId;
    return this.http.get(url);
  }
}
