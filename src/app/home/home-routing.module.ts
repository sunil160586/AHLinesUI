import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MoreLatestNewsComponent } from './more-latest-news/more-latest-news.component';
import { MoreTrendingNewsComponent } from './more-trending-news/more-trending-news.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/news/latest',
        component: MoreLatestNewsComponent
    },
    {
        path: 'home/news/trending',
        component: MoreTrendingNewsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }