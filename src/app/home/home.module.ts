import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { TrendingNewsComponent } from './trending-news/trending-news.component';
import { FashionAndLifeStyleNewsComponent } from './fashion-life-style-news/fashion-life-style-news.component';
import { MoreFeaturedNewsComponent } from './more-featured-news/more-featured-news.component';
import { FeaturedNewsComponent } from './more-featured-news/featured-news/featured-news.component';
import { SpecialNewsComponent } from './more-featured-news/special-news/special-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { LatestFeaturedNewsComponent } from './latest-featured-news/latest-featured-news.component';
import { LatestJokeComponent } from './latest-joke/latest-joke.component';
import { MarketWatchComponent } from './market-watch/market-watch.component';
import { TeluguHeadlinesComponent } from './telugu-headlines/telugu-headlines.component';
import { MoreLatestNewsComponent } from './more-latest-news/more-latest-news.component';
import { MoreTrendingNewsComponent } from './more-trending-news/more-trending-news.component';
import { LatestVideosComponent } from './latest-videos/latest-videos.component';

import { HomeService } from './home.service';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TabsModule.forRoot(),        
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        LatestNewsComponent,
        TrendingNewsComponent,
        FashionAndLifeStyleNewsComponent,
        MoreFeaturedNewsComponent,
        FeaturedNewsComponent,
        SpecialNewsComponent,
        EntertainmentNewsComponent,        
        LatestFeaturedNewsComponent,
        LatestJokeComponent,
        MarketWatchComponent,
        TeluguHeadlinesComponent,
        MoreLatestNewsComponent,
        MoreTrendingNewsComponent,
        LatestVideosComponent
    ],
    providers: [
        HomeService
    ]
})

export class HomeModule { }