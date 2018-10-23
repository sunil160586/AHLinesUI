import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerComponent } from 'ngx-spinner';
import { VideosService } from '../videos.service';

@Component({
    templateUrl: 'video-player.component.html'
})

export class VideoPlayerComponent implements OnInit {
    videoCategory: string;
    videoDetails: any;
    videos: Array<any>[];

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService, private videosService: VideosService) {
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
        this.videoCategory = this.activatedRoute.snapshot.params.category;
        this.getVideoDetails(this.activatedRoute.snapshot.params.category, this.activatedRoute.snapshot.params.videoId);
        this.getRemainingVideos(this.activatedRoute.snapshot.params.category, this.activatedRoute.snapshot.params.videoId);
    };

    getVideoDetails(category: string, videoId: number) {
        switch (category) {
            case 'latest':
                this.getLatestVideoDetailsBasedOnId(videoId);
                break;
            case 'political':
                this.getPoliticalVideoDetailsBasedOnId(videoId);
                break;
            case 'movies':
                this.getMovieVideoDetailsBasedOnId(videoId);
                break;
            case 'sports':
                this.getSportsVideoDetailsBasedOnId(videoId);
                break;
            case 'others':
                this.getOtherVideoDetailsBasedOnId(videoId);
                break;
        }
    };

    getRemainingVideos(category: string, videoId: number) {
        switch (category) {
            case 'latest':
                this.getRemainingLatestVideos(videoId);
                break;
            case 'political':
                this.getRemainingPoliticalVideos(videoId);
                break;
            case 'movies':
                this.getRemainingMoviesVideos(videoId);
                break;
            case 'sports':
                this.getRemainingSportsVideos(videoId);
                break;
            case 'others':
                this.getRemainingOtherVideos(videoId);
                break;
        }
    };

    getLatestVideoDetailsBasedOnId(videoId: number) {
        this.spinner.show();

        this.videosService.getLatestVideoDetailsBasedOnId(videoId)
            .subscribe(data => {
                this.videoDetails = data;
                this.spinner.hide();
            });
    };

    getRemainingLatestVideos(videoId: number) {
        this.spinner.show();

        this.videosService.getRemainingLatestVideos(videoId)
            .subscribe(data => {
                this.videos = data;
                this.spinner.hide();
            });
    };

    getPoliticalVideoDetailsBasedOnId(videoId: number) {
        this.spinner.show();

        this.videosService.getPoliticalVideoDetailsBasedOnId(videoId)
            .subscribe(data => {
                this.videoDetails = data;
                this.spinner.hide();
            });
    };

    getRemainingPoliticalVideos(videoId: number) {
        this.spinner.show();

        this.videosService.getRemainingPoliticalVideos(videoId)
            .subscribe(data => {
                this.videos = data;
                this.spinner.hide();
            });
    };

    getMovieVideoDetailsBasedOnId(videoId: number) {
        this.spinner.show();

        this.videosService.getMovieVideoDetailsBasedOnId(videoId)
            .subscribe(data => {
                this.videoDetails = data;
                this.spinner.hide();
            });
    };

    getRemainingMoviesVideos(videoId: number) {
        this.spinner.show();

        this.videosService.getRemainingMoviesVideos(videoId)
            .subscribe(data => {
                this.videos = data;
                this.spinner.hide();
            });
    };

    getSportsVideoDetailsBasedOnId(videoId: number) {
        this.spinner.show();

        this.videosService.getSportsVideoDetailsBasedOnId(videoId)
            .subscribe(data => {
                this.videoDetails = data;
                this.spinner.hide();
            });
    };

    getRemainingSportsVideos(videoId: number) {
        this.spinner.show();

        this.videosService.getRemainingSportsVideos(videoId)
            .subscribe(data => {
                this.videos = data;
                this.spinner.hide();
            });
    };

    getOtherVideoDetailsBasedOnId(videoId: number) {
        this.spinner.show();

        this.videosService.getOtherVideoDetailsBasedOnId(videoId)
            .subscribe(data => {
                this.videoDetails = data;
                this.spinner.hide();
            });
    };

    getRemainingOtherVideos(videoId: number) {
        this.spinner.show();

        this.videosService.getRemainingOtherVideos(videoId)
            .subscribe(data => {
                this.videos = data;
                this.spinner.hide();
            });
    };
}