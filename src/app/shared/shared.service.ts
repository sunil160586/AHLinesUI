import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class SharedService {
    constructor(private httpClient: HttpClient) { }

    getBannerSlides(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.sharedConfig.getHomePageBannerSlides)
            .retry(environment.retryFailedRequest);
    };

    getLatestPhotoGallery(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.sharedConfig.getLatestPhotoGallery)
            .retry(environment.retryFailedRequest);
    };

    getLatestMoviesReviews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.sharedConfig.getLatestMoviesReviews)
            .retry(environment.retryFailedRequest);
    };

    getLatestGuess(): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.sharedConfig.getLatestGuess)
            .retry(environment.retryFailedRequest);
    };
}