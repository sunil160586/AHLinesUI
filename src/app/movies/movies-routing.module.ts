import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieNewsAndGossipsComponent } from './movie-news-and-gossips/movie-news-and-gossips.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';
import { MovieArticleComponent } from './article/article.component';

const routes: Routes = [{
    path: 'movies',
    component: MoviesComponent
}, {
    path: 'movies/news',
    component: MovieNewsAndGossipsComponent
}, {
    path: 'movies/news/:articleId',
    component: MovieArticleComponent
}, {
    path: 'movies/reviews',
    component: MovieReviewsComponent
}, {
    path: 'movies/reviews/:articleId',
    component: MovieArticleComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class MoviesRoutingModule { }