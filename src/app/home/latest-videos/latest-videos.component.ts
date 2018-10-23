import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../home.service';

@Component({
    templateUrl: 'latest-videos.component.html',
    selector: 'latest-videos'
})

export class LatestVideosComponent implements OnInit {
    latestVideos: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private homeService: HomeService) { }

    ngOnInit() {
        this.getLatestVideos();
    };

    getLatestVideos() {
        this.spinner.show();

        this.homeService.getLatestVideos()
            .subscribe(data => {
                this.latestVideos = data;
                this.spinner.hide();
            });
    };
};