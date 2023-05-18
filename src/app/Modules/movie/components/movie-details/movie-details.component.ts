import { Recommendation } from './../../../../Core/Interface/recommendation';
import { MovieDetails } from './../../../../Core/Interface/movie-details';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../../../Core/service/Movie/movie.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Reviews } from 'src/app/Core/Interface/reviews';
import { ResultReviw } from 'src/app/Core/Interface/result-reviw';
import {MatDialog} from '@angular/material/dialog';
import { PlayTrailerComponent } from '../play-trailer/play-trailer.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
 
})
export class MovieDetailsComponent  implements OnInit{
  @ViewChild('owlCarousel') carousel: any;
   mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  Recommendation!:Recommendation[]
  Allreviews!:Reviews
  ReadyReview!:ResultReviw[]
  next:number=1
  pref:number=0
  runtime:any
  MovieDetailId:string=''
  ShowName:string=''
  movieDetails!:MovieDetails
  ImagePath:string='https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'
  CastPath:string='https://www.themoviedb.org/t/p/w138_and_h175_face/'
  BackGroundImagePath:string=``
  BgImageId:any
  ShowType:string=''
  GetProviders:any
  TrailerKey:any

  constructor(private MovieService:MovieService,private ActivatedRoute:ActivatedRoute,private MatDialog:MatDialog){
    this.ActivatedRoute.paramMap.subscribe({
      next:(r)=>{  
        this.MovieDetailId=r.get('id')!
        this.Details('movie')

      }
    })
  }
  ngOnInit(): void {
    
    this.BgImageId=document.getElementById('GameDetails')
    this.GetWatchProvidrr()
    this.GetVideos()
    
  }

  Details(type:string){
    this.MovieService.MovieDetails('movie',this.MovieDetailId).subscribe({
      next:(R)=>{
        this.movieDetails=R
        this.ShowName=R.original_title || R.original_name
      this.BackGroundImagePath=R.backdrop_path
      this.BgImageId.style.backgroundImage=`linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%),
      url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this.BackGroundImagePath}')`
        this.ShowType='movie'
        this.runtime=(this.movieDetails.runtime/60)?.toFixed(2)?.toString().split('.')
        this.GetRecommendation()
        this.GetReviews()
      },

    })
  } 

  customOptions: OwlOptions = {
    loop: true,
    autoWidth:true,
    
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2
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
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

    responsive: {
      0: {
        items: 1,
        
      },
      400: {
        items: 1
      },
      600: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  GetReviews(){
    this.MovieService.Reviews(this.MovieDetailId,'movie').subscribe({
      next:(R)=>{
        this.Allreviews=R
        this.ReadyReview=this.Allreviews.results.slice(0,1)
      },

    })
  }

  AnotherRev(){
    this.next++
    this.pref++
    if(this.Allreviews.results.length<this.next){
      this.next=1
      this.pref=0
    }
  
    
    this.ReadyReview=this.Allreviews.results.slice(this.pref,this.next)

  }
  LOadALL(){
    this.ReadyReview=this.Allreviews.results
  }
  GetRecommendation(){
    
      
      this.MovieService.GetRecommendation(this.MovieDetailId,'movie').subscribe({
        next:(R)=>{
          this.Recommendation=R.results
          
        },
  
  
  })
   
  }

  GetWatchProvidrr(){
    this.MovieService.GetwatchProvider(this.MovieDetailId,'movie').subscribe({
      next:(r)=>{
        this.GetProviders=r.results.EG
      }
    })
  }
  
  GotoLink(){
    window.open(this.GetProviders.link)
    
  }
  GetVideos(){
    this.MovieService.GetVideos(this.MovieDetailId,'movie').subscribe({
      next:(r)=>{
        this.TrailerKey=(r.results.filter((e:any)=>{
          return  e.name.toLowerCase().includes('trailer')||e.type.toLowerCase().includes('trailer')
          }))
          
         
      }
    })
  }
  OpenVideo(){
    this.MatDialog.open(PlayTrailerComponent,{
      data:{
        id:this.MovieDetailId,
        type:'movie'
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


}
