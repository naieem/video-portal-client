import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { Videos } from '../video-model';
@Component({
  selector: 'app-video-sidebar',
  templateUrl: './video-sidebar.component.html',
  styleUrls: ['./video-sidebar.component.css']
})
export class VideoSidebarComponent implements OnInit {
  @Input() videos: Videos[];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDetails(itemId) {
    // window.location.assign('/videos/details/' + itemId);
    this.router.navigate(['/videos/details/', { videoId: itemId }]);
  }

}
