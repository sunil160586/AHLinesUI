import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class NewsService {
    constructor(private httpClient: HttpClient) { }

    getSpecialBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getSpecialBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getSpecialLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getSpecialLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getSpecialNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getSpecialNews)
            .retry(environment.retryFailedRequest);
    };

    getSeemandhraBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getSeemandhraBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getSeemandhraLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getSeemandhraLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getSeemandhraNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getSeemandhraNews)
            .retry(environment.retryFailedRequest);
    };

    getTelanganaBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getTelanganaBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getTelanganaLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getTelanganaLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getTelanganaNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getTelanganaNews)
            .retry(environment.retryFailedRequest);
    };

    getSportsBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getSportsBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getSportsLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getSportsLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getSportsNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getSportsNews)
            .retry(environment.retryFailedRequest);
    };

    getNationalBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getNationalBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getNationalLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getNationalLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getNationalNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getNationalNews)
            .retry(environment.retryFailedRequest);
    };

    getWorldBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getWorldBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getWorldLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getWorldLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getWorldNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getWorldNews)
            .retry(environment.retryFailedRequest);
    };

    getNRIBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getNRIBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getNRILatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getNRILatestNews)
            .retry(environment.retryFailedRequest);
    };

    getNRINews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getNRINews)
            .retry(environment.retryFailedRequest);
    };

    getCrimeWatchBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getCrimeWatchBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getCrimeWatchLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getCrimeWatchLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getCrimeWatchNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getCrimeWatchNews)
            .retry(environment.retryFailedRequest);
    };

    getBusinessBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getBusinessBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getBusinessLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getBusinessLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getBusinessNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getBusinessNews)
            .retry(environment.retryFailedRequest);
    };

    getFashionAndLifeStyleBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getFashionAndLifeStyleBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getFashionAndLifeStyleLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getFashionAndLifeStyleLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getFashionAndLifeStyleNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getFashionAndLifeStyleNews)
            .retry(environment.retryFailedRequest);
    };

    getScienceAndTechnologyBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getScienceAndTechnologyBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getScienceAndTechnologyLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getScienceAndTechnologyLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getScienceAndTechnologyNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getScienceAndTechnologyNews)
            .retry(environment.retryFailedRequest);
    };

    getHealthAndLivingBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getHealthAndLivingBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getHealthAndLivingLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getHealthAndLivingLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getHealthAndLivingNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getHealthAndLivingNews)
            .retry(environment.retryFailedRequest);
    };

    getNewsHeadlines(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.newsConfig.getNewsHeadlines)
            .retry(environment.retryFailedRequest);
    };

    getNewsArticle(articleId: number): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getNewsArticle.replace(/{articleId}/g, articleId.toString()))
            .retry(environment.retryFailedRequest);
    };
};