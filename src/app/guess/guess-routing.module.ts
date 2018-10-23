import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuessComponent } from './guess.component';

const routes: Routes = [
    {
        path: 'guess',
        component: GuessComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class GuessRoutingModule { }