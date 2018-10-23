import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class GuessService {
    constructor(private httpClient: HttpClient) { }

    getGuessList(): Observable<Array<any>[]> {
        return this.httpClient
            .get<Array<any>[]>(environment.apiEndPoint + environment.guessConfig.getGuessList)
            .retry(environment.retryFailedRequest);
    };
};