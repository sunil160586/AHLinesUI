import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { HomeService } from '../../home.service';

@Component({
    templateUrl: './featured-news.component.html',
    selector: 'featured-news'
})

export class FeaturedNewsComponent implements OnInit {
    moreNews: Array<any>[];
    mostRead: Array<any>[];

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getMoreNews();
    };

    onTabChange(data: TabDirective) {
        switch (data.heading) {
            case 'More News':
                this.getMoreNews();
                break;
            case 'Most Read':
                this.getMostRead();
                break;
        }
    };

    getMoreNews() {
        this.homeService.getFeaturedMoreNews()
            .subscribe(data => {
                this.moreNews = data;
            });
    };

    getMostRead() {
        this.homeService.getFeaturedMostRead()
            .subscribe(data => {
                this.mostRead = data;
            });
    };
};