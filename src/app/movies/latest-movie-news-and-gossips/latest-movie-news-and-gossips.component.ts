import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';

@Component({
    templateUrl: 'latest-movie-news-and-gossips.component.html',
    selector: 'latest-movie-news-and-gossips'
})

export class LatestMovieNewsAndGossipsComponent implements OnInit {
    latestMovieNewsAndGossips: Array<any>[]

    constructor(private spinner: NgxSpinnerService, private moviesService: MoviesService) { }

    ngOnInit() {
        this.spinner.show();

        this.moviesService.getLatestMovieNewsAndGossips()
            .subscribe(data => {
                this.latestMovieNewsAndGossips = data;
                this.spinner.hide();
            });
    };
};