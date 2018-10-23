import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PagerService } from '../services/pager.service';
import { GuessService } from './guess.service';

@Component({
    templateUrl: 'guess.component.html'
})

export class GuessComponent implements OnInit {
    guessList: Array<any>[];
    allItems: Array<any>[];
    pager: any = {};

    constructor(private spinner: NgxSpinnerService, private pagerService: PagerService, private guessService: GuessService) { }

    ngOnInit() {
        this.getGuessList();
    };

    getGuessList() {
        this.spinner.show();

        this.guessService.getGuessList()
            .subscribe(data => {
                this.allItems = data;
                this.setPage(data.length);
                this.spinner.hide();
            });
    };

    setPage(page: number) {
        this.pager = this.pagerService.getPager(this.allItems.length, page, 1);
        this.guessList = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
};