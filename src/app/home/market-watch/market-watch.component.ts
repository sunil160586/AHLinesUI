import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
    templateUrl: 'market-watch.component.html',
    selector: 'market-watch'
})

export class MarketWatchComponent implements OnInit {
    marketWatch: Array<any>[];

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getMarketWatch();
    };

    getMarketWatch() {
        this.homeService.getMarketWatch()
            .subscribe(data => {
                this.marketWatch = data;
            });
    };
};