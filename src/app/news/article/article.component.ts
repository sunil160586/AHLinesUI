import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookService } from 'ngx-facebook';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from '../news.service';
import { environment } from '../../../environments/environment';

@Component({
    templateUrl: 'article.component.html'
})

export class NewsArticleComponent implements OnInit {
    articleId: number;
    newsArticle: any;
    fbCommentsHref: string;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private fb: FacebookService, private spinner: NgxSpinnerService, private newsService: NewsService) {
        fb.init({
            appId: '457626227617380',
            xfbml: true,
            version: 'v3.0'
        });
    }

    ngOnInit() {
        this.fbCommentsHref = environment.fbCommentsEndPoint + this.router.url;
        this.spinner.show();

        this.newsService.getNewsArticle(this.activatedRoute.snapshot.params.articleId)
            .subscribe(data => {
                this.newsArticle = data;
                this.spinner.hide();
            });
    };
};