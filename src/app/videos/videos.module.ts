import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-accordion';
import { VideosComponent } from './videos.component';
import { VideoCategoryComponent } from './video-category/video-category.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideosService } from './videos.service';
import { VideosRoutingModule } from './videos-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AccordionModule,
        VideosRoutingModule
    ],
    declarations: [
        VideosComponent,
        VideoCategoryComponent,
        VideoPlayerComponent
    ],
    providers: [
        VideosService
    ]
})

export class VideosModule { }