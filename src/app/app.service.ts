import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
    constructor(private httpClient: HttpClient) { }

    getScrollingNews(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.headerConfig.getScrollingNews)
            .retry(environment.retryFailedRequest);
    };
};