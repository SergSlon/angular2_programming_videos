import { Component, OnInit } from '@angular/core';
import { Video } from "../models/video.model";
import {YouTubeService} from "../you-tube-service/you-tube.service";
import 'rxjs/Rx';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videosPromise']
})
export class VideoListComponent implements OnInit {
  videos: Array<Video> = [];
  videosPromise;

  constructor(private youtube: YouTubeService) {

  }

  ngOnInit() {
    this.videosPromise
      .then((channelData) => {
        return this.youtube.getChannelVideos(channelData.id)
      })
      .then((videosInfo) => {
        videosInfo.map((videoData) => {
          this.videos.push(
            new Video(
              videoData.id.videoId,
              videoData.snippet.title,
              new Date(videoData.snippet.publishedAt),
              videoData.snippet.description,
              videoData.snippet.thumbnails.default.url
            )
          );
        });
      })
      .catch(
        (error) => console.error(error)
      )
    ;
  }
}
