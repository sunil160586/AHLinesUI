import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    templateUrl: 'banner-slides.component.html',
    selector: 'banner-slides'
})

export class BannerSlidesComponent implements OnInit {
    slides: Array<any>[];
    slideConfig = {
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'autoplay': true,
        'autoplaySpeed': 3000,
        'infinite': true
    };

    constructor(private sharedService: SharedService) { }

    ngOnInit() {
        this.getBannerSlides();
    };

    getBannerSlides() {
        this.sharedService.getBannerSlides()
            .subscribe(data => {
                this.slides = data;
            });
    };
};