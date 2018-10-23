import { Component, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements AfterViewInit {
    ngAfterViewInit() {
        setTimeout(() => {
            try {
                (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
            } catch (e) {
                console.error("error");
            }
        }, 2000);
    }
};