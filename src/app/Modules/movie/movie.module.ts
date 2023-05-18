import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { PopularComponent } from './components/popular/popular.component';

import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SharedModule } from '../shared/shared.module';
import { TvComponent } from './components/tv/tv.component';
import { TvdetailsComponent } from './components/tvdetails/tvdetails.component';
import { PopularPeoplePipe } from 'src/app/Core/pipe/popular-people.pipe';
import { PlayTrailerComponent } from './components/play-trailer/play-trailer.component';


@NgModule({
  declarations: [
    PopularComponent,
    MovieDetailsComponent,
     TvComponent,
     TvdetailsComponent,
     PopularPeoplePipe,
     PlayTrailerComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
    FormsModule,
    
  ],
  exports:[

  ]

})
export class MovieModule { }
