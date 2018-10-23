import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from '../shared.service';

@Component({
    templateUrl: 'latest-guess.component.html',
    selector: 'latest-guess'
})

export class LatestGuessComponent implements OnInit {
    latestGuess: any;

    constructor(private spinner: NgxSpinnerService, private sharedService: SharedService) { }

    ngOnInit() {
        this.getLatestGuess();
    };

    getLatestGuess() {
        this.spinner.show();

        this.sharedService.getLatestGuess()
            .subscribe(data => {
                this.latestGuess = data;
                this.spinner.hide();
            });
    };
};