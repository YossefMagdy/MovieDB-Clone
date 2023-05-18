import { Router } from '@angular/router';
import { TrandingMovie } from './../../Core/Interface/tranding-movie';
import { MovieService } from './../../Core/service/Movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-popular-slider',
  templateUrl: './popular-slider.component.html',
  styleUrls: ['./popular-slider.component.scss']
})
export class PopularSliderComponent {
  TrendSelection:string='left'
  MovieOrTv:string='movie'
  imgPath:string='https://www.themoviedb.org/t/p/w220_and_h330_face'
    constructor(private MovieService: MovieService,private Router:Router) { }
    ngOnInit(): void {
      this.getPopularMovie('popular','movie')
    }
    
  Tranding:TrandingMovie[]=[]
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
          items: 1
        },
        400: {
          items: 3
        },
        500: {
          items: 4
        },
        600: {
          items: 5
        },
        740: {
          items: 6
        },
        940: {
          items: 7
        }
      },
      nav: true
    }
  
    getPopularMovie(category:string,type:string){
      this.MovieService.GetMovies(category,type).subscribe({
        next:(R)=>{
          this.Tranding=R.results
        }
      })
    }
  
  
    List(event:Event){
      const E=event.target as HTMLButtonElement
      if(E.nextElementSibling?.classList.contains('d-none')==true){
        E.nextElementSibling?.classList.add('d-block')
        E.nextElementSibling?.classList.remove('d-none')
      }else{
        E.nextElementSibling?.classList.remove('d-block')
        E.nextElementSibling?.classList.add('d-none')
      }
    }
  
  
    TrandingTime(event:Event){
      let target = event.target as HTMLButtonElement
      let attributeValue=target.getAttribute('tr')
      if(attributeValue=='movie'){
        this.TrendSelection='left'
        this.getPopularMovie('popular','movie')
      }else{
        this.TrendSelection='right'
        this.getPopularMovie('popular','tv')
      }
  
    }
    GetData(type:string,id:number){
      if(this.MovieOrTv=='movie'){
        this.Router.navigate(['/show','moviedetails',id])
      }
      else{
        this.Router.navigate(['/show','details',id])
      }
    }
}
