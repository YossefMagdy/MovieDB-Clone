import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from './../../../../Core/service/Movie/movie.service';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-trailer',
  templateUrl: './play-trailer.component.html',
  styleUrls: ['./play-trailer.component.scss']
})
export class PlayTrailerComponent implements OnInit{
  MovieDetailId:any=''
  id: string = '';
  TrailerKey:any=''
  scrWidth:any
  width:any= window.innerWidth-10
  height:any= window.innerHeight-20
  type!:string
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.scrWidth = window.innerWidth
    if (this.scrWidth >= 1200) {
      this.width=1300
    } else if ((this.scrWidth < 1200 && this.scrWidth > 768)) {
      this.width=800
    }else if ((this.scrWidth < 768 && this.scrWidth > 0)) {
      this.width=400
    }
    
  }
  constructor(private MovieService:MovieService,@Inject(MAT_DIALOG_DATA) public data:any){
    this.MovieDetailId=data.id
    this.type=data.type
  }
  ngOnInit(): void {
    this.GetVideos()
    
    
  }





  GetVideos(){
    this.MovieService.GetVideos(this.MovieDetailId,this.type).subscribe({
      next:(r)=>{
        this.TrailerKey=(r.results.filter((e:any)=>{
          return  e.name.toLowerCase().includes('trailer')||e.type.toLowerCase().includes('trailer')
          }))
          this.id=this.TrailerKey[0].key
         
      }
    })
  }
}
