import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from '../news.service';

@Component({
    templateUrl: 'more-news.component.html',
    selector: 'more-news'
})

export class MoreNewsComponent implements OnInit {
    category: string;
    moreNews: any[] = [];

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
        this.getMoreNews();
    };

    getMoreNews() {
        switch (this.activatedRoute.snapshot.params.category) {
            case 'special':
                this.getMoreSpecialNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'andhra':
                this.getMoreAndhraNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'telangana':
                this.getMoreTelanganaNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'sports':
                this.getMoreSportsNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'national':
                this.getMoreNationalNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'world':
                this.getMoreWorldNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'nri':
                this.getMoreNRINews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'crime':
                this.getMoreCrimeNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'business':
                this.getMoreBusinessNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'fashion':
                this.getMoreFashionNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'science':
                this.getMoreScienceNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
            case 'health':
                this.getMoreHealthNews(parseInt(this.activatedRoute.snapshot.params.articleId));
                break;
        }
    };

    getMoreSpecialNews(articleId: number) {
        this.spinner.show();

        this.newsService.getSpecialNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreAndhraNews(articleId: number) {
        this.spinner.show();

        this.newsService.getSeemandhraNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreTelanganaNews(articleId: number) {
        this.spinner.show();

        this.newsService.getTelanganaNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreSportsNews(articleId: number) {
        this.spinner.show();

        this.newsService.getSportsNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreNationalNews(articleId: number) {
        this.spinner.show();

        this.newsService.getNationalNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreWorldNews(articleId: number) {
        this.spinner.show();

        this.newsService.getWorldNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreNRINews(articleId: number) {
        this.spinner.show();

        this.newsService.getNRINews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreCrimeNews(articleId: number) {
        this.spinner.show();

        this.newsService.getCrimeWatchNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreBusinessNews(articleId: number) {
        this.spinner.show();

        this.newsService.getBusinessNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreFashionNews(articleId: number) {
        this.spinner.show();

        this.newsService.getFashionAndLifeStyleNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreScienceNews(articleId: number) {
        this.spinner.show();

        this.newsService.getScienceAndTechnologyNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };

    getMoreHealthNews(articleId: number) {
        this.spinner.show();

        this.newsService.getHealthAndLivingNews()
            .subscribe(data => {
                this.moreNews = data;
                this.moreNews = this.moreNews.filter((item) => item.articleId !== articleId);
                this.spinner.hide();
            });
    };
};