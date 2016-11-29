import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChannelItemComponent } from './channel-item/channel-item.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoItemComponent,
    VideoListComponent,
    ChannelListComponent,
    PageNotFoundComponent,
    ChannelItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
