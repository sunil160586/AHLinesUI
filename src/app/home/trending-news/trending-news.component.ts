import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
    templateUrl: 'trending-news.component.html',
    selector: 'trending-news'
})

export class TrendingNewsComponent implements OnInit {
    trendingBreakingNews: any;
    trendingLatestNews: Array<any>[];

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getTrendingBreakingNews();
        this.getTrendingLatestNews();
    };

    getTrendingBreakingNews() {
        this.homeService.getTrendingBreakingNews()
            .subscribe(data => {
                this.trendingBreakingNews = data;
            });
    };

    getTrendingLatestNews() {
        this.homeService.getTrendingLatestNews()
            .subscribe(data => {
                this.trendingLatestNews = data;
            });
    };
};