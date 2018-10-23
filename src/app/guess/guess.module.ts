import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuessComponent } from './guess.component';
import { GuessService } from './guess.service';
import { GuessRoutingModule } from './guess-routing.module';

@NgModule({
    imports: [
        CommonModule,
        GuessRoutingModule
    ],
    declarations: [
        GuessComponent
    ],
    providers: [
        GuessService
    ]
})

export class GuessModule { }