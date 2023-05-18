import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlankLayoutComponent } from './Layout/blank-layout/blank-layout.component';
import { BlankWithoutFootingComponent } from './Layout/blank-without-footing/blank-without-footing.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { SharedModule } from './Modules/shared/shared.module';
import { TrandingSliderComponent } from './components/tranding-slider/tranding-slider.component';
import { FormsModule } from '@angular/forms';
import { LatestTrailerSliderComponent } from './components/latest-trailer-slider/latest-trailer-slider.component';
import { PopularSliderComponent } from './components/popular-slider/popular-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {  TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerInterceptor } from './Core/interceptors/spinner.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BlankLayoutComponent,
    BlankWithoutFootingComponent,
    NotfoundComponent,
    TrandingSliderComponent,
    LatestTrailerSliderComponent,
    PopularSliderComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    TranslateModule.forRoot(
      {
        defaultLanguage:'en',
        loader:{
          provide:TranslateLoader,
          useFactory:CreateTranslateloader,
          deps:[HttpClient]
        }
      }
    ),
    NgxSpinnerModule.forRoot(),
    
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:SpinnerInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function CreateTranslateloader( http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
