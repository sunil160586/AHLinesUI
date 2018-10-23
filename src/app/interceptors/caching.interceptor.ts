import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/Rx';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    private cache: { [name: string]: AsyncSubject<HttpEvent<any>> } = {};

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method !== "GET") {
            return next.handle(request);
        }

        const cachedResponse = this.cache[request.urlWithParams] || null;

        if (cachedResponse) {
            return cachedResponse.delay(0);
        }

        const subject = this.cache[request.urlWithParams] = new AsyncSubject<HttpEvent<any>>();
        
        next.handle(request).do(event => {
            if (event instanceof HttpResponse) {
                subject.next(event);
                subject.complete();
            }
        }).subscribe();
        
        return subject;
    }
}