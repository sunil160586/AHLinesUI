import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
    templateUrl: 'more-latest-news.component.html'
})

export class MoreLatestNewsComponent implements OnInit {
    moreLatestNews: Array<any>[];

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getMoreLatestNews();
    };

    getMoreLatestNews() {
        this.homeService.getMoreLatestNews()
            .subscribe(data => {
                this.moreLatestNews = data;
            });
    };
};