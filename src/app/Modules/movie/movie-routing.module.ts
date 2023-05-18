import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TvComponent } from './components/tv/tv.component';
import { TvdetailsComponent } from './components/tvdetails/tvdetails.component';

const routes: Routes = [
  {path:'',redirectTo:'popular',pathMatch:'full'},
  {path:'movie/:type',component:PopularComponent},
  {path:'tv/:type',component:TvComponent},
  {path:'moviedetails/:id',component:MovieDetailsComponent},
  {path:'details/:id',component:TvdetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
