import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent } from './videos.component';
import { VideoCategoryComponent } from './video-category/video-category.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
    {
        path: 'videos',
        component: VideosComponent
    },
    {
        path: 'videos/:category',
        component: VideoCategoryComponent
    },
    {
        path: 'videos/:category/:videoId',
        component: VideoPlayerComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class VideosRoutingModule { }