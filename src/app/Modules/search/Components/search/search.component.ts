import { SearchService } from './../../../../Core/service/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
updatetimeout:any
searchTerm!:string
mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
searchData:any
p: number = 1;
totalMovieItem!:number
totalTvItem!:number
totalPeopleItem!:number
imgpath:string='https://www.themoviedb.org/t/p/w94_and_h141_bestv2/'
totalpages!:number
ClickTv:boolean=false
SearchTarget=''
ClickPeople:boolean=false
  constructor(private ActivatedRoute:ActivatedRoute,private SearchService:SearchService,private Router:Router){
    ActivatedRoute.paramMap.subscribe({
      next:(r)=>{
        this.searchTerm=r.get('searchterm')!
      }
    })
   
  }
  ngOnInit(): void {
    this.GetMovies()
    this.GetTvShows()
    this.Getpeople()
  }



  GetMovies(){
    this.SearchTarget='movie'
    
    this.SearchService.Getmovies(this.searchTerm,this.p).subscribe({
      next:(r)=>{
        if(this.SearchTarget=='movie'){

          this.searchData=r
          this.totalMovieItem=r.total_results
        }
        this.totalpages=r.total_results

      }
    })
  }

  GetTvShows(){
    
    this.SearchService.GetTvShows(this.searchTerm,this.p).subscribe({
      next:(r)=>{
        if(this.SearchTarget=='tv'){
          this.searchData=r
          console.log(r)
          this.totalpages=r.total_results
        }
        this.totalTvItem=r.total_results
        
      }
    })
  }

  Getpeople(){
    
    this.SearchService.Getpeople(this.searchTerm,this.p).subscribe({
      next:(r)=>{
        if(this.SearchTarget=='people'){
          this.searchData=r
          console.log(r)
          this.searchData=r
          console.log(r.results[0].known_for.length)
          this.totalpages=r.total_results
        }
        this.totalPeopleItem=r.total_results

        
      }
    })
  }

  paginateon(){ 

    if(this.SearchTarget=='movie'){
      this.GetMovies()
    }else if(this.SearchTarget=='tv'){
      this.GetTvShows()
    }else{
      this.Getpeople()
    }
  }

  GetDetails(id:string){
    if(this.SearchTarget=='movie'){
      this.Router.navigate(['/show','moviedetails',id])
    }
    else if (this.SearchTarget=='tv'){
      this.Router.navigate(['/show','details',id])
    }
    else{
      this.Router.navigate(['/people','personDetail',id])
    }
  }

  SearchFor(){


    clearTimeout(this.updatetimeout)
    this.updatetimeout= setTimeout(()=>{
    this.SearchTarget='movie'
    this.GetMovies()
    this.SearchTarget='tv'
    this.GetTvShows()
    this.SearchTarget='people'
    this.Getpeople()
    this.SearchTarget='movie'


    },500)
    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items:3
      }
    },
    nav: true
  }
  
}
