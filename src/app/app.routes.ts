import { Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ChannelListComponent} from "./channel-list/channel-list.component";
import {ChannelItemComponent} from "./channel-item/channel-item.component";
import {VideoListComponent} from "./video-list/video-list.component";
import {VideoItemComponent} from "./video-item/video-item.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'channels', component: ChannelListComponent },
    { path: 'videos', component: VideoListComponent },
    { path: 'channels/:id', component: ChannelItemComponent },
    { path: 'videos/:id', component: VideoItemComponent },
    { path: '**', component: PageNotFoundComponent }
];