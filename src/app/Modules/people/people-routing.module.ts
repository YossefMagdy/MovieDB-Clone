import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularPeopleComponent } from './components/popular-people/popular-people.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';

const routes: Routes = [
  {path:'',redirectTo:'popular_people',pathMatch:'full'},
  {path:'popular_people',component:PopularPeopleComponent},
  {path:'personDetail/:id',component:PeopleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
