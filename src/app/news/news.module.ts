import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookModule } from 'ngx-facebook';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { SharedModule } from '../shared/shared.module';

import { NewsComponent } from './news.component';
import { NewsCategoryComponent } from './category/category.component';
import { NewsArticleComponent } from './article/article.component';
import { MoreNewsComponent } from './more-news/more-news.component';

import { NewsService } from './news.service';

import { NewsRoutingModule } from './news-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FacebookModule.forRoot(),
        ShareButtonsModule,
        SharedModule,
        NewsRoutingModule
    ],
    declarations: [
        NewsComponent,
        NewsCategoryComponent,
        NewsArticleComponent,
        MoreNewsComponent
    ],
    providers: [
        NewsService
    ]
})

export class NewsModule { }