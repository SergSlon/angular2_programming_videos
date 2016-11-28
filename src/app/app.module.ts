import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelListComponent } from './channel-list/channel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoItemComponent,
    VideoListComponent,
    ChannelComponent,
    ChannelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
