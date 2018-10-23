import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../home.service';
import { environment } from '../../../environments/environment';

@Component({
    templateUrl: 'telugu-headlines.component.html',
    selector: 'telugu-headlines'
})

export class TeluguHeadlinesComponent implements OnInit {
    teluguWebSiteUrl: string;
    teluguHeadlines: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private homeService: HomeService) {
        this.teluguWebSiteUrl = environment.teluguWebSiteUrl;
    };

    ngOnInit() {
        this.getTeluguHeadlines();
    };

    getTeluguHeadlines() {
        this.spinner.show();

        this.homeService.getTeluguHeadlines()
            .subscribe(data => {
                this.teluguHeadlines = data;
                this.spinner.hide();
            });
    };
};