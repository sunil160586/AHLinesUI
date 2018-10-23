import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
    templateUrl: './special-news.component.html',
    selector: 'special-news'
})

export class SpecialNewsComponent implements OnInit {
    specialBreakingNews: any;

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getSpecialBreakingNews();
    };

    getSpecialBreakingNews() {
        this.homeService.getSpecialBreakingNews()
            .subscribe(data => {
                this.specialBreakingNews = data;
            });
    };
};