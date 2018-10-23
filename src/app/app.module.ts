import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { CacheInterceptor } from './interceptors/caching.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { HeadersInterceptor } from './interceptors/headers.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { MoviesModule } from './movies/movies.module';
import { PhotosModule } from './photos/photos.module';
import { VideosModule } from './videos/videos.module';
import { GuessModule } from './guess/guess.module';
import { SharedModule } from './shared/shared.module';

import { PagerService } from './services/pager.service';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    ShareButtonsModule.forRoot(),
    HomeModule,
    NewsModule,
    MoviesModule,
    PhotosModule,
    VideosModule,
    GuessModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
    PagerService,
    AppService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }