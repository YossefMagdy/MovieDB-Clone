import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {MatChipsModule} from '@angular/material/chips';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatListModule} from '@angular/material/list';
import {NgxPopperModule} from 'ngx-popper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'
import {  TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatChipsModule,
    NgCircleProgressModule.forRoot({}),
    NgxPopperModule.forRoot({}),
    ReactiveFormsModule,
    MatDialogModule,
    TranslateModule.forChild(
      {
        defaultLanguage:'en',
        loader:{
          provide:TranslateLoader,
          useFactory:CreateTranslateloader,
          deps:[HttpClient]
        }
      }
    ),
   
    NgxYoutubePlayerModule.forRoot(),
    
  ],
  exports:[
    MatChipsModule,
    CarouselModule,
    NgCircleProgressModule,
    MatListModule,
    NgxPopperModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TranslateModule,
    MatDialogModule,
    NgxYoutubePlayerModule,
  
  ],

})
export class SharedModule {
 }
 export function CreateTranslateloader( http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
