import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService {
    constructor(private httpClient: HttpClient) { }

    getLatestMovieNewsAndGossips(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.moviesConfig.getLatestMovieNewsAndGossips)
            .retry(environment.retryFailedRequest);
    };

    getMovieVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.moviesConfig.getMovieVideos)
            .retry(environment.retryFailedRequest);
    };

    getMovieAudios(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.moviesConfig.getMovieAudios)
            .retry(environment.retryFailedRequest);
    };

    getMovieNewsAndGossips(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.moviesConfig.getMovieNewsAndGossips)
            .retry(environment.retryFailedRequest);
    };

    getMovieArticle(articleId: number): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.moviesConfig.getMovieArticle.replace(/{articleId}/g, articleId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getMoviesReviews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.moviesConfig.getMoviesReviews)
            .retry(environment.retryFailedRequest);
    };
};