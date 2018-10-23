import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../home.service';

@Component({
    templateUrl: 'fashion-life-style-news.component.html',
    selector: 'fashion-life-style-news'
})

export class FashionAndLifeStyleNewsComponent implements OnInit {
    fashionAndLifeStyleBreakingNews: any;
    fashionAndLifeStyleLatestNews: Array<any>[] = [];

    constructor(private spinner: NgxSpinnerService, private homeService: HomeService) { }

    ngOnInit() {
        this.getFashionAndLifeStyleBreakingNews();
        this.getFashionAndLifeStyleLatestNews();
    };

    getFashionAndLifeStyleBreakingNews() {
        this.spinner.show();

        this.homeService.getFashionAndLifeStyleBreakingNews()
            .subscribe(data => {
                this.fashionAndLifeStyleBreakingNews = data;
                this.spinner.hide();
            });
    };

    getFashionAndLifeStyleLatestNews() {
        this.spinner.show();

        this.homeService.getFashionAndLifeStyleLatestNews()
            .subscribe(data => {
                this.fashionAndLifeStyleLatestNews = data;
                this.spinner.hide();
            });
    };
};