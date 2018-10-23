import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {
    constructor(private httpClient: HttpClient) { }

    getLatestBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.homeConfig.getLatestBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getMoreLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getMoreLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getFashionAndLifeStyleBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.homeConfig.getFashionAndLifeStyleBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getFashionAndLifeStyleLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getFashionAndLifeStyleLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getTrendingBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.homeConfig.getTrendingBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getTrendingLatestNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getTrendingLatestNews)
            .retry(environment.retryFailedRequest);
    };

    getMoreTrendingNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getMoreTrendingNews)
            .retry(environment.retryFailedRequest);
    };

    getFeaturedMoreNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getFeaturedMoreNews)
            .retry(environment.retryFailedRequest);
    };

    getFeaturedMostRead(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getFeaturedMostRead)
            .retry(environment.retryFailedRequest);
    };

    getSpecialBreakingNews(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.newsConfig.getSpecialBreakingNews)
            .retry(environment.retryFailedRequest);
    };

    getEntertainmentNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getEntertainmentNews)
            .retry(environment.retryFailedRequest);
    };

    getFeaturedLatestGallery(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getFeaturedLatestGallery)
            .retry(environment.retryFailedRequest);
    };

    getFeaturedLatestVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getFeaturedLatestVideos)
            .retry(environment.retryFailedRequest);
    };

    getMarketWatch(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getMarketWatch)
            .retry(environment.retryFailedRequest);
    };

    getLatestVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getLatestVideos)
            .retry(environment.retryFailedRequest);
    };

    getTeluguHeadlines(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.homeConfig.getTeluguHeadlines)
            .retry(environment.retryFailedRequest);
    };
};