import { Component } from '@angular/core';
import { MovieService } from './../../../../Core/service/Movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { TrandingMovie } from 'src/app/Core/Interface/tranding-movie';
import { Movie } from 'src/app/Core/Interface/Movies/movie';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  p:number=1
  Category!: string
  Movie!: Movie
  SectionName!:string
  imgPath:string='https://www.themoviedb.org/t/p/w355_and_h200_multi_faces'
  constructor(private MovieService: MovieService, private ActivatedRoute: ActivatedRoute) {
    ActivatedRoute.paramMap.subscribe({
      next: (R) => {
        this.Category = R.get('type')!
        this.SectionName=this.Category
        this.GetPopularMovie()
      }
    })
  }

  GetPopularMovie() {
    this.MovieService.GetMovies(this.Category, 'tv',this.p).subscribe({
      next: (R) => {
        this.Movie =R
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
  paginateon(){
    this.GetPopularMovie()
  }


}
