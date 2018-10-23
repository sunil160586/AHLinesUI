import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../home.service';

@Component({
    templateUrl: 'latest-news.component.html',
    selector: 'latest-news'
})

export class LatestNewsComponent implements OnInit {
    latestBreakingNews: any;
    specialBreakingNews: any;
    latestNews: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private homeService: HomeService) { }

    ngOnInit() {
        this.getLatestBreakingNews();
        this.getSpecialBreakingNews();
        this.getLatestNews();
    };

    getLatestBreakingNews() {
        this.spinner.show();

        this.homeService.getLatestBreakingNews()
            .subscribe(data => {
                this.latestBreakingNews = data;
                this.spinner.hide();
            });
    };

    getSpecialBreakingNews() {
        this.spinner.show();

        this.homeService.getSpecialBreakingNews()
            .subscribe(data => {
                this.specialBreakingNews = data;
                this.spinner.hide();
            });
    };

    getLatestNews() {
        this.spinner.show();

        this.homeService.getLatestNews()
            .subscribe(data => {
                this.latestNews = data;
                this.spinner.hide();
            });
    };
};