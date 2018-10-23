import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from '../shared.service';

@Component({
    templateUrl: 'latest-movies-reviews.component.html',
    selector: 'latest-movies-reviews'
})

export class LatestMoviesReviewsComponent implements OnInit {
    moviesReviews: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private sharedService: SharedService) { }

    ngOnInit() {
        this.getLatestMoviesReviews();
    };

    getLatestMoviesReviews() {
        this.spinner.show();

        this.sharedService.getLatestMoviesReviews()
            .subscribe(data => {
                this.moviesReviews = data;
                this.spinner.hide();
            });
    };
};