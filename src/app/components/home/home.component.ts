import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from './../../Core/service/Movie/movie.service';
import { Component , OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagePath:string=''
  Image!:any;
  count:number=0
  BgImage:any
  searchTerm!:string
  constructor(private MovieService:MovieService,private Router:Router,public translate:TranslateService){
    


  }
  ngOnInit(): void {
    this.BgImage=document.getElementById('Headeringx')
    this.MovieService.GetIMage().subscribe({
      next:(R)=>{
        this.Image=R.backdrops
        this.imagePath=this.Image[Math.floor(Math.random()*this.Image.length)].file_path
        this.BgImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.225),rgba(0, 0, 0, 0.373),rgba(0, 0, 0, 0.433)),url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${this.imagePath}')`
        this.ImageChange()
      }
    })
    

   
  }
  ImageChange(){
    const ImageLength=this.Image.length

        setInterval(()=>{
      if(this.count>ImageLength){
        this.count=0
      }
      this.imagePath=this.Image[Math.floor(Math.random()*this.Image.length)].file_path
      this.BgImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.225),rgba(0, 0, 0, 0.373),rgba(0, 0, 0, 0.433)),url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${this.imagePath}')`
      this.count++;
    },7000 )
  }
  search(){
    if(this.searchTerm.length>0){
      this.Router.navigate(['/search','search',this.searchTerm])
    }
  }
  OpenSearch(event:KeyboardEvent){
    if(event.key=='Enter'){
      this.search()
    }
  }
}
