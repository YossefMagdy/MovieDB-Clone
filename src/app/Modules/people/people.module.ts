import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PopularPeopleComponent } from './components/popular-people/popular-people.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PopularPeopleComponent,
    PeopleDetailsComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
