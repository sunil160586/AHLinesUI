import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
    templateUrl: 'entertainment-news.component.html',
    selector: 'entertainment-news'
})

export class EntertainmentNewsComponent implements OnInit {
    latestEntertainmentNews: any;
    entertainmentNews: Array<any>[] = [];

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getEntertainmentNews();
    };

    getEntertainmentNews() {
        this.homeService.getEntertainmentNews()
            .subscribe(data => {
                this.latestEntertainmentNews = data[0];

                for (let i = 1; i <= data.length; i++) {
                    this.entertainmentNews.push(data[i]);
                }
            });
    };
};