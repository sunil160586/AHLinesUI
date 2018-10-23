import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '../shared/shared.module';

import { MoviesComponent } from './movies.component';
import { LatestMovieNewsAndGossipsComponent } from './latest-movie-news-and-gossips/latest-movie-news-and-gossips.component';
import { MovieNewsAndGossipsComponent } from './movie-news-and-gossips/movie-news-and-gossips.component';
import { MovieAudiosComponent } from './movie-audios/movie-audios.component';
import { MovieVideosComponent } from './movie-videos/movie-videos.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';
import { MovieArticleComponent } from './article/article.component';

import { MoviesService } from './movies.service';

import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NgxPaginationModule,
        SharedModule,
        MoviesRoutingModule
    ],
    declarations: [
        MoviesComponent,
        LatestMovieNewsAndGossipsComponent,
        MovieNewsAndGossipsComponent,
        MovieAudiosComponent,
        MovieVideosComponent,
        MovieReviewsComponent,
        MovieArticleComponent
    ],
    providers: [
        MoviesService
    ]
})

export class MoviesModule { }