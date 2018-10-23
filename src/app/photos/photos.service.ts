import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class PhotosService {
    constructor(private httpClient: HttpClient) { }

    getActressGallery(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getCelebritiesGallery.replace(/{celebrityType}/g, 'actress'))
            .retry(environment.retryFailedRequest);
    };

    getActorsGallery(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getCelebritiesGallery.replace(/{celebrityType}/g, 'actor'))
            .retry(environment.retryFailedRequest);
    };

    getMoviesGallery(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getMoviesGallery)
            .retry(environment.retryFailedRequest);
    };

    getEventsGallery(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getEventsGallery)
            .retry(environment.retryFailedRequest);
    };

    getWallpapersGallery(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getWallpapersGallery)
            .retry(environment.retryFailedRequest);
    };

    getActressTitleNames(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getCelebritiesTitleNames.replace(/{celebrityType}/g, 'actress'))
            .retry(environment.retryFailedRequest);
    };

    getActorsTitleNames(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getCelebritiesTitleNames.replace(/{celebrityType}/g, 'actor'))
            .retry(environment.retryFailedRequest);
    };

    getMoviesTitleNames(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getMoviesTitleNames)
            .retry(environment.retryFailedRequest);
    };

    getEventsTitleNames(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getEventsTitleNames)
            .retry(environment.retryFailedRequest);
    };

    getCelebritiesListBasedOnTitle(celebrityType: string, title: string): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getCelebritiesListBasedOnTitle.replace(/{celebrityType}/g, celebrityType).replace(/{title}/g, title))
            .retry(environment.retryFailedRequest);
    };

    getMoviesListBasedOnTitle(title: string): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getMoviesListBasedOnTitle.replace(/{title}/g, title))
            .retry(environment.retryFailedRequest);
    };

    getEventsListBasedOnTitle(title: string): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getEventsListBasedOnTitle.replace(/{title}/g, title))
            .retry(environment.retryFailedRequest);
    };

    getActressGalleryMetaKeys(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.metaKeysConfig.getActressGalleryMetaKeys)
            .retry(environment.retryFailedRequest);
    };

    getActorsGalleryMetaKeys(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.metaKeysConfig.getActorsGalleryMetaKeys)
            .retry(environment.retryFailedRequest);
    };

    getMoviesGalleryMetaKeys(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.metaKeysConfig.getMoviesGalleryMetaKeys)
            .retry(environment.retryFailedRequest);
    };

    getEventsGalleryMetaKeys(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.metaKeysConfig.getEventsGalleryMetaKeys)
            .retry(environment.retryFailedRequest);
    };

    getWallpapersGalleryMetaKeys(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.metaKeysConfig.getWallpapersGalleryMetaKeys)
            .retry(environment.retryFailedRequest);
    };

    getActressGalleryList(actressId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getActressGalleryList.replace(/{actressId}/g, actressId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getActorGalleryList(actorId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getActorGalleryList.replace(/{actorId}/g, actorId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getMovieGalleryList(movieId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getMovieGalleryList.replace(/{movieId}/g, movieId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getEventGalleryList(eventId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getEventGalleryList.replace(/{eventId}/g, eventId.toString()))
            .retry(environment.retryFailedRequest);
    };

    getWallPaperGalleryList(wallpaperId: number): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.photosConfig.getWallPaperGalleryList.replace(/{wallpaperId}/g, wallpaperId.toString()))
            .retry(environment.retryFailedRequest);
    };
}