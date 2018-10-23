import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
    templateUrl: 'more-trending-news.component.html'
})

export class MoreTrendingNewsComponent implements OnInit {
    moreTrendingNews: Array<any>[];

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getMoreTrendingNews();
    };

    getMoreTrendingNews() {
        this.homeService.getMoreTrendingNews()
            .subscribe(data => {
                this.moreTrendingNews = data;
            });
    };
};