import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosComponent } from './photos.component';
import { GalleryTypeComponent } from './gallery-type/gallery-type.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

const routes: Routes = [
    {
        path: 'photos',
        component: PhotosComponent
    },
    {
        path: 'photos/:category',
        component: GalleryTypeComponent
    },
    {
        path: 'photos/:category/:id',
        component: GalleryListComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PhotosRoutingModule { }