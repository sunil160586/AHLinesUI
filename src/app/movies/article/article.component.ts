import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';

@Component({
    templateUrl: 'article.component.html'
})

export class MovieArticleComponent implements OnInit {
    movieArticle: any;

    constructor(private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService, private moviesService: MoviesService) { }

    ngOnInit() {
        this.spinner.show();

        this.moviesService.getMovieArticle(this.activatedRoute.snapshot.params.articleId)
            .subscribe(data => {
                this.movieArticle = data;
                this.spinner.hide();
            });
    };
};