import { Router } from '@angular/router';
import { TrandingMovie } from './../../Core/Interface/tranding-movie';
import { MovieService } from './../../Core/service/Movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
;

@Component({
  selector: 'app-latest-trailer-slider',
  templateUrl: './latest-trailer-slider.component.html',
  styleUrls: ['./latest-trailer-slider.component.scss']
})
export class LatestTrailerSliderComponent implements OnInit {
  posterPath:string='/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg'
  BgImage:any
  TrendSelection:string='left'
  MovieOrTv:string='movie'
  imgPath:string='https://www.themoviedb.org/t/p/w355_and_h200_multi_faces'
    constructor(private MovieService: MovieService,private Router:Router) { }


    ngOnInit(): void {
      this.GetMovies('top_rated','movie')
      this.BgImage=document.getElementById('UpcomingMovie')
      this.BgImage.style.backgroundImage = `linear-gradient(to right, rgba(3,37,65, 0.75) 0%, rgba(3,37,65, 0.75) 100%),url('https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${this.posterPath}')`

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
          items:2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }
  
    GetMovies(category:string='top_rated',type:string){
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
  
  
    TrandingTime(event:Event,x:string){
      let target = event.target as HTMLButtonElement
      let attributeValue=target.getAttribute('tr')
      if(attributeValue=='Movies'){
        this.TrendSelection='left'
       this.GetMovies('top_rated',x)
      }else{
        this.TrendSelection='right'
        this.GetMovies('top_rated',x)
      }
  
    }
    changeBG(Path:string){
      this.posterPath=Path
      this.BgImage.style.backgroundImage = `linear-gradient(to right, rgba(3,37,65, 0.75) 0%, rgba(3,37,65, 0.75) 100%),url('https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${this.posterPath}')`
    }
    GetData(type:string,id:number){
      console.log(this.MovieOrTv)
      if(this.MovieOrTv=='movie'){
        this.Router.navigate(['/show','moviedetails',id])
      }
      else{
        this.Router.navigate(['/show','details',id])
      }
    }
}
