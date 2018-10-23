import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';

@Injectable()
export class VideosService {
    constructor(private httpClient: HttpClient) { }

    getLatestVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getLatestVideos)
            .retry(environment.retryFailedRequest);
    };

    getPoliticalVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getPoliticalVideos)
            .retry(environment.retryFailedRequest);
    };

    getMoviesVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getMoviesVideos)
            .retry(environment.retryFailedRequest);
    };

    getSportsVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getSportsVideos)
            .retry(environment.retryFailedRequest);
    };

    getOtherVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getOtherVideos)
            .retry(environment.retryFailedRequest);
    };

    getLatestVideoDetailsBasedOnId(videoId: number): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.videosConfig.getLatestVideoDetailsBasedOnId.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getRemainingLatestVideos(videoId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getRemainingLatestVideos.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getPoliticalVideoDetailsBasedOnId(videoId: number): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.videosConfig.getPoliticalVideoDetailsBasedOnId.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getRemainingPoliticalVideos(videoId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getRemainingPoliticalVideos.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getMovieVideoDetailsBasedOnId(videoId: number): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.videosConfig.getMovieVideoDetailsBasedOnId.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getRemainingMoviesVideos(videoId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getRemainingMoviesVideos.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getSportsVideoDetailsBasedOnId(videoId: number): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.videosConfig.getSportsVideoDetailsBasedOnId.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getRemainingSportsVideos(videoId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getRemainingSportsVideos.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getOtherVideoDetailsBasedOnId(videoId: number): Observable<any> {
        return this.httpClient
            .get<any>(environment.apiEndPoint + environment.videosConfig.getOtherVideoDetailsBasedOnId.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getRemainingOtherVideos(videoId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getRemainingOtherVideos.replace(/{videoId}/g, videoId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getMoreSportsVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getMoreSportsVideos)
            .retry(environment.retryFailedRequest);
    };

    getMorePoliticalVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getMorePoliticalVideos)
            .retry(environment.retryFailedRequest);
    };

    getMoreMoviesVideos(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.videosConfig.getMoreMoviesVideos)
            .retry(environment.retryFailedRequest);
    };
}