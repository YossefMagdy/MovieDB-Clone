import { Router } from '@angular/router';
import { TrandingMovie } from './../../Core/Interface/tranding-movie';
import { MovieService } from './../../Core/service/Movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tranding-slider',
  templateUrl: './tranding-slider.component.html',
  styleUrls: ['./tranding-slider.component.scss']
})
export class TrandingSliderComponent implements OnInit {

TrendSelection:string='left'
imgPath:string='https://www.themoviedb.org/t/p/w220_and_h330_face'
  constructor(private MovieService: MovieService,private Router:Router,public translate:TranslateService) {
    
   
   }
  ngOnInit(): void {
    this.getTrending()
    const currentLanguage = this.translate.currentLang;
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

  getTrending(time:string='day'){
    this.MovieService.TrandingMovie(time).subscribe({
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
    if(attributeValue=='day'){
      this.TrendSelection='left'
      this.getTrending(attributeValue)
    }else{
      this.TrendSelection='right'
      this.getTrending(attributeValue!)
    }

  }
  GetData(type:string,id:number){
    if(type=='movie'){
      this.Router.navigate(['/show','moviedetails',id])
    }
  }


}
