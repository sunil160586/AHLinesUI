import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from '../shared.service';

@Component({
    templateUrl: 'latest-photo-gallery.component.html',
    selector: 'latest-photo-gallery'
})

export class LatestPhotoGalleryComponent implements OnInit {
    photoGallery: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private sharedService: SharedService) { }

    ngOnInit() {
        this.getLatestPhotoGallery();
    };

    getLatestPhotoGallery() {
        this.spinner.show();

        this.sharedService.getLatestPhotoGallery()
            .subscribe(data => {
                this.photoGallery = data;
                this.spinner.hide();
            });
    };
};