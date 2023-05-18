import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  {path:'',redirectTo:'search/:searchterm',pathMatch:'full'},
  {path:'search/:searchterm',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
