import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';

@Component({
    templateUrl: 'movie-news-and-gossips.component.html'
})

export class MovieNewsAndGossipsComponent implements OnInit {
    movieNews: Array<any>[];
    page: number = 1;

    constructor(private spinner: NgxSpinnerService, private moviesService: MoviesService) { }

    ngOnInit() {
        this.spinner.show();

        this.moviesService.getMovieNewsAndGossips()
            .subscribe(data => {
                this.movieNews = data;
                this.spinner.hide();
            });
    };
};