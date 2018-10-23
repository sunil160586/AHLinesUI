import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';

@Component({
    templateUrl: 'movie-audios.component.html',
    selector: 'movie-audios'
})

export class MovieAudiosComponent implements OnInit {
    movieAudios: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private moviesService: MoviesService) { }

    ngOnInit() {
        this.moviesService.getMovieAudios()
            .subscribe(data => {
                this.movieAudios = data;
                this.spinner.hide();
            });
    };
};