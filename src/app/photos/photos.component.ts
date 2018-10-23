import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { NgxSpinnerService } from 'ngx-spinner';
import { PhotosService } from './photos.service';

@Component({
    templateUrl: 'photos.component.html'
})

export class PhotosComponent implements OnInit {
    galleries: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private photosService: PhotosService) { }

    ngOnInit() {
        this.getActressGallery();
    };

    onSelect(data: TabDirective) {
        switch (data.heading) {
            case 'Actress':
                this.getActressGallery();
                break;
            case 'Actors':
                this.getActorsGallery();
                break;
            case 'Movies':
                this.getMoviesGallery();
                break;
            case 'Events':
                this.getEventsGallery();
                break;
            case 'WallPapers':
                this.getWallpapersGallery();
                break;
        }
    };

    getActressGallery() {
        this.spinner.show();

        this.photosService.getActressGallery()
            .subscribe(data => {
                this.galleries = data;
                this.spinner.hide();
            });
    };

    getActorsGallery() {
        this.spinner.show();

        this.photosService.getActorsGallery()
            .subscribe(data => {
                this.galleries = data;
                this.spinner.hide();
            });
    };

    getMoviesGallery() {
        this.spinner.show();

        this.photosService.getMoviesGallery()
            .subscribe(data => {
                this.galleries = data;
                this.spinner.hide();
            });
    };

    getEventsGallery() {
        this.spinner.show();

        this.photosService.getEventsGallery()
            .subscribe(data => {
                this.galleries = data;
                this.spinner.hide();
            });
    };

    getWallpapersGallery() {
        this.spinner.show();

        this.photosService.getWallpapersGallery()
            .subscribe(data => {
                this.galleries = data;
                this.spinner.hide();
            });
    };
};