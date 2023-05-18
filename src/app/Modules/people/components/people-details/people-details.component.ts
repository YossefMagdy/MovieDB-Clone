import { Knownfor } from './../../../../Core/Interface/PopularPeople/knownfor';
import { PopularPeopleService } from 'src/app/Core/service/Movie/popular-people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonDetails } from 'src/app/Core/Interface/PopularPeople/person-details';
import { OwlOptions } from 'ngx-owl-carousel-o';

ActivatedRoute
@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit{
  
  id:string=''
  Data!:PersonDetails
  personmovie!:Knownfor
  imgpath:string='https://www.themoviedb.org/t/p/w300_and_h450_bestv2'
  MoVieImgPath:string='https://www.themoviedb.org/t/p/w150_and_h225_bestv2'
  Biography!:string
  constructor(private ActivatedRoute:ActivatedRoute,private PopularPeopleService:PopularPeopleService){
    this.ActivatedRoute.paramMap.subscribe({
      next:(r)=>{
        this.id=r.get('id')!
      }
    })
  }
  ngOnInit(): void {
   this.getpersonDetails()
   this.PersonMovie()
  }

  getpersonDetails(){
    this.PopularPeopleService.GetPersonDetail(this.id).subscribe({
      next:(r)=>{
        this.Data=r
        this.Biography=this.Data?.biography?.slice(0,400)
      },
      error:(e)=>{
      }
    })
  }


  PersonMovie(){
    this.PopularPeopleService.GetPersonMovie(this.id).subscribe({
      next:(r)=>{
        this.personmovie=r
      }
    })
  }


















  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      500: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
}
