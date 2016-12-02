import { Component, OnInit } from '@angular/core';
import { YouTubeService } from "../you-tube-service/you-tube.service";
import { Video } from "../models/video.model";
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videosPromise;
  channelId: string = 'UCTVa8qLEpll75U-nNiR4cFg';

  constructor(private youtube: YouTubeService) {
    this.videosPromise =  this.youtube.getChannelInfo(this.channelId);
  }

  ngOnInit() {}
}
