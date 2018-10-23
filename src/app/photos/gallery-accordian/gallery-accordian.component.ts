import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PhotosService } from '../photos.service';

@Component({
    templateUrl: 'gallery-accordian.component.html',
    selector: 'gallery-accordian'
})

export class GalleryAccordianComponent implements OnInit {
    @Input() category: string;
    titles: Array<any>[];
    items: Array<any>[];

    constructor(private spinnner: NgxSpinnerService, private photosService: PhotosService) { }

    ngOnInit() {
        switch (this.category) {
            case 'actress':
                this.getActressTitleNames();
                break;
            case 'actors':
                this.getActorsTitleNames();
                break;
            case 'movies':
                this.getMoviesTitleNames();
                break;
            case 'events':
                this.getEventsTitleNames();
                break;
        }
    };

    getActressTitleNames() {
        this.spinnner.show();

        this.photosService.getActressTitleNames()
            .subscribe(data => {
                this.titles = data;
                this.spinnner.hide();
            });
    };

    getActorsTitleNames() {
        this.spinnner.show();

        this.photosService.getActorsTitleNames()
            .subscribe(data => {
                this.titles = data;
                this.spinnner.hide();
            });
    };

    getMoviesTitleNames() {
        this.spinnner.show();

        this.photosService.getMoviesTitleNames()
            .subscribe(data => {
                this.titles = data;
                this.spinnner.hide();
            });
    };

    getEventsTitleNames() {
        this.spinnner.show();

        this.photosService.getEventsTitleNames()
            .subscribe(data => {
                this.titles = data;
                this.spinnner.hide();
            });
    };

    getActressListBasedOnTitle(title: string) {
        this.spinnner.show();

        this.photosService.getCelebritiesListBasedOnTitle('actress', title)
            .subscribe(data => {
                this.items = data;
                this.spinnner.hide();
            });
    };

    getActorsListBasedOnTitle(title: string) {
        this.spinnner.show();

        this.photosService.getCelebritiesListBasedOnTitle('actor', title)
            .subscribe(data => {
                this.items = data;
                this.spinnner.hide();
            });
    };

    getMoviesListBasedOnTitle(title: string) {
        this.spinnner.show();

        this.photosService.getMoviesListBasedOnTitle(title)
            .subscribe(data => {
                this.items = data;
                this.spinnner.hide();
            });
    };

    getEventsListBasedOnTitle(title: string) {
        this.spinnner.show();

        this.photosService.getEventsListBasedOnTitle(title)
            .subscribe(data => {
                this.items = data;
                this.spinnner.hide();
            });
    };

    getItemsBasedOnTitle(category: string, title: string) {
        this.items = [];

        switch (category) {
            case 'actress':
                this.getActressListBasedOnTitle(title);
                break;
            case 'actors':
                this.getActorsListBasedOnTitle(title);
                break;
            case 'movies':
                this.getMoviesListBasedOnTitle(title);
                break;
            case 'events':
                this.getEventsListBasedOnTitle(title);
                break;
        }
    };
}