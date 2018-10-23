import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
    constructor(private http: Http, private appConfig: AppConfig) { }

    getMethodWithParameters(url: string, data: any, headers: Headers): Observable<Response> {
        return this.http.get(this.appConfig.apiEndPoint + url, new RequestOptions({ headers: headers, params: data })).map(this.extractData).catch(this.errorHandler);
    };

    getMethodWithoutParameters(url: string, headers: Headers): Observable<Response> {
        return this.http.get(this.appConfig.apiEndPoint + url, new RequestOptions({ headers: headers })).map(this.extractData).catch(this.errorHandler);
    };

    postMethodWithParameters(url: string, data: any, headers: Headers): Observable<Response> {
        return this.http.post(this.appConfig.apiEndPoint + url, data, new RequestOptions({ headers: headers })).map(this.extractData).catch(this.errorHandler);
    };

    postMethodWithoutParameters(url: string, headers: Headers): Observable<Response> {
        return this.http.post(this.appConfig.apiEndPoint + url, new RequestOptions({ headers: headers })).map(this.extractData).catch(this.errorHandler);
    };

    putMethodWithParameters(url: string, data: any, headers: Headers): Observable<Response> {
        return this.http.put(this.appConfig.apiEndPoint + url, data, new RequestOptions({ headers: headers })).map(this.extractData).catch(this.errorHandler);
    };

    putMethodWithoutParameters(url: string, headers: Headers): Observable<Response> {
        return this.http.put(this.appConfig.apiEndPoint + url, new RequestOptions({ headers: headers })).map(this.extractData).catch(this.errorHandler);
    };

    deleteMethodWithParameters(url: string, data: any, headers: Headers): Observable<Response> {
        return this.http.delete(this.appConfig.apiEndPoint + url, new RequestOptions({ headers: headers, params: data })).map(this.extractData).catch(this.errorHandler);
    };

    deleteMethodWithoutParameters(url: string, headers: Headers): Observable<Response> {
        return this.http.delete(this.appConfig.apiEndPoint + url, new RequestOptions({ headers: headers })).map(this.extractData).catch(this.errorHandler);
    };

    extractData(response: Response) {
        return response;
    };

    errorHandler(error: Response | any) {
        return Observable.throw(error.message || error);
    };
};