import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PhotosService } from '../photos.service';

@Component({
    templateUrl: 'gallery-type.component.html'
})

export class GalleryTypeComponent implements OnInit {
    category: string;
    galleries: Array<any>[];
    metaKeys: any;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService, private photosService: PhotosService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    };

    ngOnInit() {
        this.category = this.activatedRoute.snapshot.params.category;

        switch (this.category) {
            case 'actress':
                this.getActressGallery();
                this.getActressGalleryMetaKeys();
                break;
            case 'actors':
                this.getActorsGallery();
                this.getActorsGalleryMetaKeys();
                break;
            case 'movies':
                this.getMoviesGallery();
                this.getMoviesGalleryMetaKeys();
                break;
            case 'events':
                this.getEventsGallery();
                this.getEventsGalleryMetaKeys();
                break;
            case 'wallpapers':
                this.getWallpapersGallery();
                this.getWallpapersGalleryMetaKeys();
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

    getActressGalleryMetaKeys() {
        this.spinner.show();

        this.photosService.getActressGalleryMetaKeys()
            .subscribe(data => {
                this.metaKeys = data;
                this.spinner.hide();
            });
    };

    getActorsGalleryMetaKeys() {
        this.spinner.show();

        this.photosService.getActorsGalleryMetaKeys()
            .subscribe(data => {
                this.metaKeys = data;
                this.spinner.hide();
            });
    };

    getMoviesGalleryMetaKeys() {
        this.spinner.show();

        this.photosService.getMoviesGalleryMetaKeys()
            .subscribe(data => {
                this.metaKeys = data;
                this.spinner.hide();
            });
    };

    getEventsGalleryMetaKeys() {
        this.spinner.show();

        this.photosService.getEventsGalleryMetaKeys()
            .subscribe(data => {
                this.metaKeys = data;
                this.spinner.hide();
            });
    };

    getWallpapersGalleryMetaKeys() {
        this.spinner.show();

        this.photosService.getWallpapersGalleryMetaKeys()
            .subscribe(data => {
                this.metaKeys = data;
                this.spinner.hide();
            });
    };
}