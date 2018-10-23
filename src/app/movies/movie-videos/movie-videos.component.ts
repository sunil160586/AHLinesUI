import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';

@Component({
    templateUrl: 'movie-videos.component.html',
    selector: 'movie-videos'
})

export class MovieVideosComponent implements OnInit {
    movieVideos: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private moviesService: MoviesService) { }

    ngOnInit() {
        this.spinner.show();

        this.moviesService.getMovieVideos()
            .subscribe(data => {
                this.movieVideos = data;
                this.spinner.hide();
            });
    };
};