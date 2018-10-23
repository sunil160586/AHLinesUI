import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PhotosService } from '../photos.service';

@Component({
    templateUrl: 'gallery-list.component.html',
    host: { '(window:keydown)': 'hotkeys($event)' }
})

export class GalleryListComponent implements OnInit {
    name: string;
    category: string;
    page: number = 1;
    galleries: Array<any>[];
    selectedImage: any;

    constructor(private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService, private photosService: PhotosService) { }

    ngOnInit() {
        switch (this.activatedRoute.snapshot.params.category) {
            case 'actress':
                this.getActressGalleryList(this.activatedRoute.snapshot.params.id);
                break;
            case 'actors':
                this.getActorGalleryList(this.activatedRoute.snapshot.params.id);
                break;
            case 'movies':
                this.getMovieGalleryList(this.activatedRoute.snapshot.params.id);
                break;
            case 'events':
                this.getEventGalleryList(this.activatedRoute.snapshot.params.id);
                break;
            case 'wallpapers':
                this.getWallPaperGalleryList(this.activatedRoute.snapshot.params.id);
                break;
        }
    };

    setSelectedImage(gallery: any) {
        this.selectedImage = gallery;
    };

    navigate(forward: any) {
        this.spinner.show();
        let index = this.galleries.indexOf(this.selectedImage) + (forward ? 1 : -1);

        if (index >= 0 && index < this.galleries.length) {
            this.selectedImage = this.galleries[index];
        }

        this.spinner.hide();
    };

    hotkeys(event: any) {
        if (this.selectedImage) {
            if (event.keyCode === 37) {
                this.navigate(false);
            } else if (event.keyCode === 39) {
                this.navigate(true);
            }
        }
    };

    getActressGalleryList(actressId: number) {
        this.spinner.show();

        this.photosService.getActressGalleryList(actressId)
            .subscribe(data => {
                this.galleries = data;
                this.name = (this.galleries[0] as any).name;
                this.spinner.hide();
            });
    };

    getActorGalleryList(actorId: number) {
        this.spinner.show();

        this.photosService.getActorGalleryList(actorId)
            .subscribe(data => {
                this.galleries = data;
                this.name = (this.galleries[0] as any).name;
                this.spinner.hide();
            });
    };

    getMovieGalleryList(movieId: number) {
        this.spinner.show();

        this.photosService.getMovieGalleryList(movieId)
            .subscribe(data => {
                this.galleries = data;
                this.name = (this.galleries[0] as any).name;
                this.spinner.hide();
            });
    };

    getEventGalleryList(eventId: number) {
        this.spinner.show();

        this.photosService.getEventGalleryList(eventId)
            .subscribe(data => {
                this.galleries = data;
                this.name = (this.galleries[0] as any).name;
                this.spinner.hide();
            });
    };

    getWallPaperGalleryList(wallpaperId: number) {
        this.spinner.show();

        this.photosService.getWallPaperGalleryList(wallpaperId)
            .subscribe(data => {
                this.galleries = data;
                this.name = (this.galleries[0] as any).name;
                this.spinner.hide();
            });
    };
}