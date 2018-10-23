import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from './news.service';

@Component({
    templateUrl: 'news.component.html'
})

export class NewsComponent implements OnInit {
    specialBreakingNews: any;
    specialLatestNews: Array<any>[];
    seemandhraBreakingNews: any;
    seemandhraLatestNews: Array<any>[];
    telanganaBreakingNews: any;
    telanganaLatestNews: Array<any>[];
    sportsBreakingNews: any;
    sportsLatestNews: Array<any>[];
    nationalBreakingNews: any;
    nationalLatestNews: Array<any>[];
    worldBreakingNews: any;
    worldLatestNews: Array<any>[];
    nriBreakingNews: any;
    nriLatestNews: Array<any>[];
    crimeWatchBreakingNews: any;
    crimeWatchLatestNews: Array<any>[];
    businessBreakingNews: any;
    businessLatestNews: Array<any>[];
    fashionAndLifeStyleBreakingNews: any;
    fashionAndLifeStyleLatestNews: Array<any>[];
    scienceAndTechnologyBreakingNews: any;
    scienceAndTechnologyLatestNews: Array<any>[];
    healthAndLivingBreakingNews: any;
    healthAndLivingLatestNews: Array<any>[];

    constructor(private spinner: NgxSpinnerService, private newsService: NewsService) { }

    ngOnInit() {
        this.getSpecialBreakingNews();
        this.getSpecialLatestNews();
        this.getSeemandhraBreakingNews();
        this.getSeemandhraLatestNews();
        this.getTelanganaBreakingNews();
        this.getTelanganaLatestNews();
        this.getSportsBreakingNews();
        this.getSportsLatestNews();
        this.getNationalBreakingNews();
        this.getNationalLatestNews();
        this.getWorldBreakingNews();
        this.getWorldLatestNews();
        this.getNRIBreakingNews();
        this.getNRILatestNews();
        this.getCrimeWatchBreakingNews();
        this.getCrimeWatchLatestNews();
        this.getBusinessBreakingNews();
        this.getBusinessLatestNews();
        this.getFashionAndLifeStyleBreakingNews();
        this.getFashionAndLifeStyleLatestNews();
        this.getScienceAndTechnologyBreakingNews();
        this.getScienceAndTechnologyLatestNews();
        this.getHealthAndLivingBreakingNews();
        this.getHealthAndLivingLatestNews();
    };

    getSpecialBreakingNews() {
        this.spinner.show();

        this.newsService.getSpecialBreakingNews()
            .subscribe(data => {
                this.specialBreakingNews = data;
                this.spinner.hide();
            });
    };

    getSpecialLatestNews() {
        this.spinner.show();

        this.newsService.getSpecialLatestNews()
            .subscribe(data => {
                this.specialLatestNews = data;
                this.spinner.hide();
            });
    };

    getSeemandhraBreakingNews() {
        this.spinner.show();

        this.newsService.getSeemandhraBreakingNews()
            .subscribe(data => {
                this.seemandhraBreakingNews = data;
                this.spinner.hide();
            });
    };

    getSeemandhraLatestNews() {
        this.spinner.show();
        
        this.newsService.getSeemandhraLatestNews()
            .subscribe(data => {
                this.seemandhraLatestNews = data;
                this.spinner.hide();
            });
    };

    getTelanganaBreakingNews() {
        this.spinner.show();
        
        this.newsService.getTelanganaBreakingNews()
            .subscribe(data => {
                this.telanganaBreakingNews = data;
                this.spinner.hide();
            });
    };

    getTelanganaLatestNews() {
        this.spinner.show();

        this.newsService.getTelanganaLatestNews()
            .subscribe(data => {
                this.telanganaLatestNews = data;
                this.spinner.hide();
            });
    };

    getSportsBreakingNews() {
        this.spinner.show();

        this.newsService.getSportsBreakingNews()
            .subscribe(data => {
                this.sportsBreakingNews = data;
                this.spinner.hide();
            });
    };

    getSportsLatestNews() {
        this.spinner.show();

        this.newsService.getSportsLatestNews()
            .subscribe(data => {
                this.sportsLatestNews = data;
                this.spinner.hide();
            });
    };

    getNationalBreakingNews() {
        this.spinner.show();

        this.newsService.getNationalBreakingNews()
            .subscribe(data => {
                this.nationalBreakingNews = data;
                this.spinner.hide();
            });
    };

    getNationalLatestNews() {
        this.spinner.show();

        this.newsService.getNationalLatestNews()
            .subscribe(data => {
                this.nationalLatestNews = data;
                this.spinner.hide();
            });
    };

    getWorldBreakingNews() {
        this.spinner.show();

        this.newsService.getWorldBreakingNews()
            .subscribe(data => {
                this.worldBreakingNews = data;
                this.spinner.hide();
            });
    };

    getWorldLatestNews() {
        this.spinner.show();

        this.newsService.getWorldLatestNews()
            .subscribe(data => {
                this.worldLatestNews = data;
                this.spinner.hide();
            });
    };

    getNRIBreakingNews() {
        this.spinner.show();

        this.newsService.getNRIBreakingNews()
            .subscribe(data => {
                this.nriBreakingNews = data;
                this.spinner.hide();
            });
    };

    getNRILatestNews() {
        this.spinner.show();

        this.newsService.getNRILatestNews()
            .subscribe(data => {
                this.nriLatestNews = data;
                this.spinner.hide();
            });
    };

    getCrimeWatchBreakingNews() {
        this.spinner.show();

        this.newsService.getCrimeWatchBreakingNews()
            .subscribe(data => {
                this.crimeWatchBreakingNews = data;
                this.spinner.hide();
            });
    };

    getCrimeWatchLatestNews() {
        this.spinner.show();

        this.newsService.getCrimeWatchLatestNews()
            .subscribe(data => {
                this.crimeWatchLatestNews = data;
                this.spinner.hide();
            });
    };

    getBusinessBreakingNews() {
        this.spinner.show();

        this.newsService.getBusinessBreakingNews()
            .subscribe(data => {
                this.businessBreakingNews = data;
                this.spinner.hide();
            });
    };

    getBusinessLatestNews() {
        this.spinner.show();

        this.newsService.getBusinessLatestNews()
            .subscribe(data => {
                this.businessLatestNews = data;
                this.spinner.hide();
            });
    };

    getFashionAndLifeStyleBreakingNews() {
        this.spinner.show();

        this.newsService.getFashionAndLifeStyleBreakingNews()
            .subscribe(data => {
                this.fashionAndLifeStyleBreakingNews = data;
                this.spinner.hide();
            });
    };

    getFashionAndLifeStyleLatestNews() {
        this.spinner.show();

        this.newsService.getFashionAndLifeStyleLatestNews()
            .subscribe(data => {
                this.fashionAndLifeStyleLatestNews = data;
                this.spinner.hide();
            });
    };

    getScienceAndTechnologyBreakingNews() {
        this.spinner.show();

        this.newsService.getScienceAndTechnologyBreakingNews()
            .subscribe(data => {
                this.scienceAndTechnologyBreakingNews = data;
                this.spinner.hide();
            });
    };

    getScienceAndTechnologyLatestNews() {
        this.spinner.show();

        this.newsService.getScienceAndTechnologyLatestNews()
            .subscribe(data => {
                this.scienceAndTechnologyLatestNews = data;
                this.spinner.hide();
            });
    };

    getHealthAndLivingBreakingNews() {
        this.spinner.show();

        this.newsService.getHealthAndLivingBreakingNews()
            .subscribe(data => {
                this.healthAndLivingBreakingNews = data;
                this.spinner.hide();
            });
    };

    getHealthAndLivingLatestNews() {
        this.spinner.show();

        this.newsService.getHealthAndLivingLatestNews()
            .subscribe(data => {
                this.healthAndLivingLatestNews = data;
                this.spinner.hide();
            });
    };

    addThreeDots(content: string, length: number) {
        return content.length > length ? content.substring(0, length) + "..." : content;
    };
};