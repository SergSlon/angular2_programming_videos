import { Component, OnInit } from '@angular/core';
import { YouTubeService } from "../you-tube-service/you-tube.service";
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private youtube: YouTubeService) {

  }

  ngOnInit() {
    this.youtube.getChannelInfo('UCTVa8qLEpll75U-nNiR4cFg').then((channelInfo) => {
        console.log('getChannelInfo', channelInfo);
      })
      .then(() => {
        return this.youtube.getChannelVideos('UCTVa8qLEpll75U-nNiR4cFg')
      })
      .then((videosInfo) => {
        console.log('getChannelVideos', videosInfo);

        videosInfo.map((video) => this.youtube.getVideoInfo(video.id.videoId).then((videoInfo) => {
          console.log('videoInfo', videoInfo);
        }));
      })
      .catch(
        (error) => console.error(error)
      )
    ;
  }
}
