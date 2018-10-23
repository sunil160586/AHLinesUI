import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';
import { VideosService } from '../videos.service';

@Component({
    templateUrl: 'video-category.component.html'
})

export class VideoCategoryComponent implements OnInit {
    category: string;
    videos: Array<any>[];
    moreVideos: Array<any>[];

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService, private videosService: VideosService) {
        this.category = this.activatedRoute.snapshot.params.category;

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    }

    ngOnInit() {
        this.getLatestVideos();
    };

    getLatestVideos() {
        this.videos = [];

        switch (this.category) {
            case 'sports':
                this.getSportsVideos();
                break;
            case 'political':
                this.getPoliticalVideos();
                break;
            case 'movies':
                this.getMoviesVideos();
                break;
        }
    };

    getMoreVideos() {
        this.moreVideos = [];

        switch (this.category) {
            case 'sports':
                this.getMoreSportsVideos();
                break;
            case 'political':
                this.getMorePoliticalVideos();
                break;
            case 'movies':
                this.getMoreMoviesVideos();
                break;
        }
    };

    getSportsVideos() {
        this.spinner.show();

        this.videosService.getSportsVideos()
            .subscribe(data => {
                this.videos = data;
                this.spinner.hide();
            });
    };

    getPoliticalVideos() {
        this.spinner.show();

        this.videosService.getPoliticalVideos()
            .subscribe(data => {
                this.videos = data;
                this.spinner.hide();
            });
    };

    getMoviesVideos() {
        this.spinner.show();

        this.videosService.getMoviesVideos()
            .subscribe(data => {
                this.videos = data;
                this.spinner.hide();
            });
    };

    getMoreSportsVideos() {
        this.spinner.show();

        this.videosService.getMoreSportsVideos()
            .subscribe(data => {
                this.moreVideos = data;
                this.spinner.hide();
            });
    };

    getMorePoliticalVideos() {
        this.spinner.show();

        this.videosService.getMorePoliticalVideos()
            .subscribe(data => {
                this.moreVideos = data;
                this.spinner.hide();
            });
    };

    getMoreMoviesVideos() {
        this.spinner.show();

        this.videosService.getMoreMoviesVideos()
            .subscribe(data => {
                this.moreVideos = data;
                this.spinner.hide();
            });
    };
}