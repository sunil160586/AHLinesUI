import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsCategoryComponent } from './category/category.component';
import { NewsArticleComponent } from './article/article.component';

const routes: Routes = [
    {
        path: 'news',
        component: NewsComponent
    }, {
        path: 'news/:category',
        component: NewsCategoryComponent
    }, {
        path: 'news/:category/:articleId',
        component: NewsArticleComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class NewsRoutingModule { }