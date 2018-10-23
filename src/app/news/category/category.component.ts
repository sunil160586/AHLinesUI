import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from '../news.service';

@Component({
    templateUrl: 'category.component.html'
})

export class NewsCategoryComponent implements OnInit {
    category: string;
    newsType: string;
    news: Array<any>[];
    newsHeadlines: Array<any>[];

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService, private newsService: NewsService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };

        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    };

    ngOnInit() {
        this.category = this.activatedRoute.snapshot.params.category;

        switch (this.category) {
            case 'special':
                this.newsType = 'Special News';
                this.getSpecialNews();
                break;
            case 'andhra':
                this.newsType = 'Seemandhra News';
                this.getSeemandhraNews();
                break;
            case 'telangana':
                this.newsType = 'Telangana News';
                this.getTelanganaNews();
                break;
            case 'sports':
                this.newsType = 'Sports News';
                this.getSportsNews();
                break;
            case 'national':
                this.newsType = 'National News';
                this.getNationalNews();
                break;
            case 'world':
                this.newsType = 'World News';
                this.getWorldNews();
                break;
            case 'nri':
                this.newsType = 'NRI News';
                this.getNRINews();
                break;
            case 'crime':
                this.newsType = 'Crime News';
                this.getCrimeWatchNews();
                break;
            case 'business':
                this.newsType = 'Business News';
                this.getBusinessNews();
                break;
            case 'fashion':
                this.newsType = 'Fashion & Lifestyle News';
                this.getFashionAndLifeStyleNews();
                break;
            case 'science':
                this.newsType = 'Science & Technology News';
                this.getScienceAndTechnologyNews();
                break;
            case 'health':
                this.newsType = 'Health & Living News';
                this.getHealthAndLivingNews();
                break;
        }

        this.getNewsHeadlines();
    };

    getSpecialNews() {
        this.spinner.show();

        this.newsService.getSpecialNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getSeemandhraNews() {
        this.spinner.show();

        this.newsService.getSeemandhraNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getTelanganaNews() {
        this.spinner.show();

        this.newsService.getTelanganaNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getSportsNews() {
        this.spinner.show();

        this.newsService.getSportsNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getNationalNews() {
        this.spinner.show();

        this.newsService.getNationalNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getWorldNews() {
        this.spinner.show();

        this.newsService.getWorldNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getNRINews() {
        this.spinner.show();

        this.newsService.getNRINews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getCrimeWatchNews() {
        this.spinner.show();

        this.newsService.getCrimeWatchNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getBusinessNews() {
        this.spinner.show();

        this.newsService.getBusinessNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getFashionAndLifeStyleNews() {
        this.spinner.show();

        this.newsService.getFashionAndLifeStyleNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getScienceAndTechnologyNews() {
        this.spinner.show();

        this.newsService.getScienceAndTechnologyNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getHealthAndLivingNews() {
        this.spinner.show();

        this.newsService.getHealthAndLivingNews()
            .subscribe(data => {
                this.news = data;
                this.spinner.hide();
            });
    };

    getNewsHeadlines() {
        this.spinner.show();

        this.newsService.getNewsHeadlines()
            .subscribe(data => {
                this.newsHeadlines = data;
                this.spinner.hide();
            });
    };
};