import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../../app.service';
import { environment } from '../../../environments/environment';

@Component({
    templateUrl: 'header.component.html',
    selector: 'app-header'
})

export class HeaderComponent implements OnInit {
    teluguWebSiteUrl: string;
    scrollingNews: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private appService: AppService) {
        this.teluguWebSiteUrl = environment.teluguWebSiteUrl;
    };

    ngOnInit() {
        this.getScrollingNews();
    };

    getScrollingNews() {
        this.spinner.show();

        this.appService.getScrollingNews()
            .subscribe(data => {
                this.scrollingNews = data;
                this.spinner.hide();
            });
    };
};