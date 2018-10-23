import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-accordion';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PhotosComponent } from './photos.component';
import { GalleryTypeComponent } from './gallery-type/gallery-type.component';
import { GalleryAccordianComponent } from './gallery-accordian/gallery-accordian.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { PhotosService } from './photos.service';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TabsModule.forRoot(),
        AccordionModule,
        NgxPaginationModule,
        SharedModule,
        PhotosRoutingModule
    ],
    declarations: [
        PhotosComponent,
        GalleryTypeComponent,
        GalleryAccordianComponent,
        GalleryListComponent
    ],
    providers: [
        PhotosService
    ]
})

export class PhotosModule { }