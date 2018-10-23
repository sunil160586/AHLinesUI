import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { VideosService } from './videos.service';

@Component({
    templateUrl: 'videos.component.html'
})

export class VideosComponent implements OnInit {
    latestVideos: Array<any>[];
    politicalVideos: Array<any>[];
    movieVideos: Array<any>[];
    sportsVideos: Array<any>[];
    otherVideos: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private videosService: VideosService) { }

    ngOnInit() {
        this.getLatestVideos();
    };

    getLatestVideos() {
        this.spinner.show();

        this.videosService.getLatestVideos()
            .subscribe(data => {
                this.latestVideos = data;
                this.spinner.hide();
            });
    };

    getPoliticalVideos() {
        this.spinner.show();

        this.videosService.getPoliticalVideos()
            .subscribe(data => {
                this.politicalVideos = data;
                this.spinner.hide();
            });
    };

    getMoviesVideos() {
        this.spinner.show();

        this.videosService.getMoviesVideos()
            .subscribe(data => {
                this.movieVideos = data;
                this.spinner.hide();
            });
    };

    getSportsVideos() {
        this.spinner.show();

        this.videosService.getSportsVideos()
            .subscribe(data => {
                this.sportsVideos = data;
                this.spinner.hide();
            });
    };

    getOtherVideos() {
        this.spinner.show();

        this.videosService.getOtherVideos()
            .subscribe(data => {
                this.otherVideos = data;
                this.spinner.hide();
            });
    };

    getVideos(category: string) {
        switch (category) {
            case 'latest':
                this.getLatestVideos();
                break;
            case 'political':
                this.getPoliticalVideos();
                break;
            case 'movie':
                this.getMoviesVideos();
                break;
            case 'sports':
                this.getSportsVideos();
                break;
            case 'others':
                this.getOtherVideos();
                break;
        }
    };
};