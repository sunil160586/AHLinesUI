import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../home.service';

@Component({
    templateUrl: 'latest-featured-news.component.html',
    selector: 'latest-featured-news'
})

export class LatestFeaturedNewsComponent implements OnInit {
    latestGallery: Array<any>[];
    latestVideos: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private homeService: HomeService) { }

    ngOnInit() {
        this.getLatestGallery();
    };

    onTabChange(data: TabDirective) {
        switch (data.heading) {
            case 'Latest Gallery':
                this.getLatestGallery();
                break;
            case 'Latest Videos':
                this.getLatestVideos();
                break;
        }
    };

    getLatestGallery() {
        this.spinner.show();

        this.homeService.getFeaturedLatestGallery()
            .subscribe(data => {
                this.latestGallery = data;
                this.spinner.hide();
            });
    };

    getLatestVideos() {
        this.spinner.show();

        this.homeService.getFeaturedLatestVideos()
            .subscribe(data => {
                this.latestVideos = data;
                this.spinner.hide();
            });
    };
};