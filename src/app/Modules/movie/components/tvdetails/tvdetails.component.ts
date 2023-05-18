import { Recommendation } from './../../../../Core/Interface/recommendation';
import { MovieDetails } from './../../../../Core/Interface/movie-details';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../../../Core/service/Movie/movie.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Reviews } from 'src/app/Core/Interface/reviews';
import { ResultReviw } from 'src/app/Core/Interface/result-reviw';
import { MatDialog } from '@angular/material/dialog';
import { PlayTrailerComponent } from '../play-trailer/play-trailer.component';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
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
  GetProviders:any

  constructor(private MovieService:MovieService,private ActivatedRoute:ActivatedRoute,private MatDialog:MatDialog){
    this.ActivatedRoute.paramMap.subscribe({
      next:(r)=>{  
        this.MovieDetailId=r.get('id')!
        this.Details('tv')
      }
    })
  }
  ngOnInit(): void {
    
    this.BgImageId=document.getElementById('GameDetails')
    this.GetVideos()
    
    
  }

  Details(type:string){
    this.MovieService.MovieDetails('tv',this.MovieDetailId).subscribe({
      next:(R)=>{
        this.movieDetails=R
        this.ShowName=R.original_title || R.original_name
        console.log(R)
      this.BackGroundImagePath=R.backdrop_path
      this.BgImageId.style.backgroundImage=`linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%),
      url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this.BackGroundImagePath}')`
      
        this.runtime=(this.movieDetails?.runtime/60)?.toFixed(2)?.toString().split('.')
        this.GetRecommendation()
        this.GetReviews()
      },

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
        items: 1
      },
      400: {
        items: 3
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
  GetReviews(){
    this.MovieService.Reviews(this.MovieDetailId,'tv').subscribe({
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
    
      
      this.MovieService.GetRecommendation(this.MovieDetailId,'tv').subscribe({
        next:(R)=>{
          this.Recommendation=R.results
          
        },
  
  
  })
   
  }

  GetWatchProvidrr(){
    this.MovieService.GetwatchProvider(this.MovieDetailId,'tv').subscribe({
      next:(r)=>{
        console.log(r.results.EG.flatrate)
        this.GetProviders=r.results.EG
      }
    })
  }
  
  GotoLink(){
    window.open(this.GetProviders.link)
    
  }
  TrailerKey:any
  GetVideos(){
    this.MovieService.GetVideos(this.MovieDetailId,'tv').subscribe({
      next:(r)=>{
        console.log(r)
        this.TrailerKey=(r.results.filter((e:any)=>{
          return  e.name.toLowerCase().includes('trailer')||e.type.toLowerCase().includes('trailer')
          }))
          console.log(this.TrailerKey.length)
          
         
      }
    })
  }
  OpenVideo(){
    this.MatDialog.open(PlayTrailerComponent,{
      data:{
        id:this.MovieDetailId,
        type:'tv'
      }
    })
  }
}
