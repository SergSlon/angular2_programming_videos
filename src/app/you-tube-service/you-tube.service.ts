import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

let YOUTUBE_API_KEY: string = environment.YOUTUBE_API_KEY;
let YOUTUBE_API_SEARCH_URL: string = environment.YOUTUBE_API_SEARCH_URL;

@Injectable()
export class YouTubeService {
  private cache: Object = {};

  constructor(
    private http: Http,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_SEARCH_URL) private apiUrl: string
  ) {

  }

  clearCache() {
    this.cache = {};
  }

  getChannelVideos(channelId: string) {
    this.cache[channelId] = this.cache[channelId] || {};

    let params: string = [
      `channelId=${channelId}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    let queryUrl: string = `${this.apiUrl}/search?${params}`;

    if (!this.cache[channelId]['videos']) {
      this.cache[channelId]['videos'] = this.http.get(queryUrl)
        .map((response: Response) => response.json().items)
        .toPromise()
      ;
    }

    return this.cache[channelId]['videos'];
  }

  getChannelInfo(channelId: string) {
    this.cache[channelId] = this.cache[channelId] || {};

    let params: string = [
      `id=${channelId}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `maxResults=1`
    ].join('&');

    let queryUrl: string = `${this.apiUrl}/channels?${params}`;

    if (!this.cache[channelId]['info']) {
      this.cache[channelId]['info'] = this.http.get(queryUrl)
        .map((response: Response) => response.json().items[0].snippet)
        .toPromise()
      ;
    }

    return this.cache[channelId]['info'];
  }

  getVideoInfo(videoId: string) {
    this.cache[videoId] = this.cache[videoId] || {};

    let params: string = [
      `id=${videoId}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `maxResults=1`
    ].join('&');

    let queryUrl: string = `${this.apiUrl}/videos?${params}`;

    if (!this.cache[videoId]['info']) {
      this.cache[videoId]['info'] = this.http.get(queryUrl)
        .map((response: Response) => response.json().items[0].snippet)
        .toPromise()
      ;
    }

    return this.cache[videoId]['info'];
  }
}

export let youTubeServiceInjectables: Array<any> = [
    {provide: YouTubeService, useClass: YouTubeService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_SEARCH_URL, useValue: YOUTUBE_API_SEARCH_URL}
];