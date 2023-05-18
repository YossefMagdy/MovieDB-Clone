import { MovieService } from './../../Core/service/Movie/movie.service';
import { NavigationEnd, Router } from '@angular/router';
import { AuthServiceService } from './../../Core/service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { TrandingMovie } from 'src/app/Core/Interface/tranding-movie';
import { SearchService } from 'src/app/Core/service/search.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  updatetimeout:any
  searchTerm:string=''
  SearchTarget='movie'
  searchData:any
  Tranding:TrandingMovie[]=[]
  islogin:boolean=false
  searchopen:boolean=true
  Toggle:string=''
  name:string=''
  English:boolean=true
  constructor(private AuthServiceService:AuthServiceService,private Router:Router,private MovieService:MovieService,private SearchService:SearchService,public translate:TranslateService){  
    
    this.Router.events.subscribe({
      next:(r)=>{
        if(r instanceof NavigationEnd){
        this.Toggle=r.url.split('/').slice(2).join().toUpperCase()
        }
          
      }
    })
  }
  ngOnInit(): void {
    this.getTrending()
    this.AuthServiceService.UserSignIn.subscribe({
      next:(r)=>{
        if(this.AuthServiceService.UserSignIn.getValue()!= null){
          this.name=this.AuthServiceService.userName
          this.islogin=true
        }
        else{
          this.islogin=false
        }
      }
    })
  }


  width(){
    let Slide:any=document.getElementById('slideNavbarx') 
    let width=Slide.offsetWidth
    let WindowWidth =window.innerWidth
      if(width!=0){
        Slide.style.width=0+"px"
    }else{
      Slide.style.width=(WindowWidth/2)+'px'
      width=Slide.offsetWidth
    }
    
  }

  logout(){
    localStorage.removeItem('userToken')
    this.AuthServiceService.UserSignIn.next(null)
    localStorage.removeItem('userDone')
    this.Router.navigate(['/Authentication','login'])
  }

  getTrending(time:string='day'){
    this.MovieService.TrandingMovie(time).subscribe({
      next:(R)=>{
        this.Tranding=R.results
      }
    })
  }

  gotoMovieDetails(id:any){
    this.searchopen=true
    this.Router.navigate(['/show','moviedetails',id])
  }

  GetMovies(){
    
    
    this.SearchService.Getmovies(this.searchTerm).subscribe({
      next:(r)=>{
       

          this.searchData=r.results
          

      }
    })


    
  }

  searchFor(event:KeyboardEvent){
    if(event.key=='Enter'){
      this.searchopen=true
      this.Router.navigate(['/search','search',this.searchTerm])
    }else{
      
      clearTimeout(this.updatetimeout)
      this.updatetimeout=setTimeout(() => {
        this.GetMovies()
      }, 500);
    }
  
  }

  gotoDetails(id:number){
      this.searchopen=true;
   this.Router.navigate(['/show','moviedetails',id])
  }

}
