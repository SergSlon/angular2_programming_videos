import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
  inputs: ['video']
})
export class VideoItemComponent implements OnInit {
  video;

  constructor() { }

  ngOnInit() {
  }

}
