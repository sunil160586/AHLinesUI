import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsenseModule } from 'ng2-adsense';
import { SlickModule } from 'ngx-slick';

import { AdBlockComponent } from './ad-block/ad-block.component';
import { BannerSlidesComponent } from './banner-slides/banner-slides.component';
import { LatestMoviesReviewsComponent } from './latest-movies-reviews/latest-movies-reviews.component';
import { LatestPhotoGalleryComponent } from './latest-photo-gallery/latest-photo-gallery.component';
import { LatestGuessComponent } from './latest-guess/latest-guess.component';
import { DateTimeBasedOnTimeZone } from '../pipes/timeZone.pipe';
import { NewLineToBreak } from '../pipes/newLineToBreak.pipe';

import { SharedService } from './shared.service';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AdsenseModule.forRoot(),
        SlickModule.forRoot(),
        SharedRoutingModule
    ],
    declarations: [
        AdBlockComponent,
        BannerSlidesComponent,
        LatestMoviesReviewsComponent,
        LatestPhotoGalleryComponent,
        LatestGuessComponent,
        DateTimeBasedOnTimeZone,
        NewLineToBreak
    ],
    exports: [
        AdBlockComponent,
        BannerSlidesComponent,
        LatestMoviesReviewsComponent,
        LatestPhotoGalleryComponent,
        LatestGuessComponent,
        DateTimeBasedOnTimeZone,
        NewLineToBreak
    ],
    providers: [SharedService]
})

export class SharedModule { }