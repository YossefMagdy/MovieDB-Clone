import { BlankLayoutComponent } from './Layout/blank-layout/blank-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './Modules/authentication/components/login/login.component';
import { AuthGuard } from './Core/guard/auth.guard';

const routes: Routes = [
  {path:'',component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',canActivate:[AuthGuard],component:HomeComponent},
    {path:'Authentication',loadChildren:()=>import('./Modules/authentication/authentication.module').then((Resp)=>Resp.AuthenticationModule)},
    {path:'show',canActivate:[AuthGuard],loadChildren:()=>import('./Modules/movie/movie.module').then((Resp)=>Resp.MovieModule)},
    {path:'people',canActivate:[AuthGuard],loadChildren:()=>import('./Modules/people/people.module').then((Resp)=>Resp.PeopleModule)},
    {path:'search',canActivate:[AuthGuard],loadChildren:()=>import('./Modules/search/search.module').then((Resp)=>Resp.SearchModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
