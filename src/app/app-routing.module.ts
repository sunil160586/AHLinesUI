import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
}, {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
}, {
    path: 'news',
    loadChildren: 'app/news/news.module#NewsModule'
}, {
    path: 'movies',
    loadChildren: 'app/movies/movies.module#MoviesModule'
}, {
    path: 'photos',
    loadChildren: 'app/photos/photos.module#PhotosModule'
}, {
    path: 'videos',
    loadChildren: 'app/videos/videos.module#VideosModule'
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }