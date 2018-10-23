import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';

@Component({
    templateUrl: 'movie-reviews.component.html'
})

export class MovieReviewsComponent implements OnInit {
    movieReviews: Array<any>[];
    page: number = 1;

    constructor(private spinner: NgxSpinnerService, private moviesService: MoviesService) { }

    ngOnInit() {
        this.spinner.show();

        this.moviesService.getMoviesReviews()
            .subscribe(data => {
                this.movieReviews = data;
                this.spinner.hide();
            });
    };
};