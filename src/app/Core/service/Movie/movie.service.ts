import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../../Enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  [x: string]: any;

  constructor( private _HttpClient:HttpClient) { }

  GetIMage():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/550/images?api_key=f00358d51b413f99420b153f15514668&language=en-US&include_image_language=en,null
    `)
  }
  TrandingMovie(Time:string='day'):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/${Time}?api_key=f00358d51b413f99420b153f15514668`)
  }
  GetMovies(Category:string='upcoming',type:string='movie',p:number=1):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${Category}?api_key=f00358d51b413f99420b153f15514668&language=en-US&page=${p}`)
  }
  MovieDetails(Type:string='movie',movieId:string):Observable<any>{
    
    return this._HttpClient.get(`https://api.themoviedb.org/3/${Type}/${movieId}?api_key=f00358d51b413f99420b153f15514668&language=en-US&append_to_response=credits`)
  }
  Reviews(movieId:string,type:string):Observable<any>{
    
    return this._HttpClient.get(`
    https://api.themoviedb.org/3/${type}/${movieId}/reviews?api_key=f00358d51b413f99420b153f15514668&language=en-US&page=1`)
  }
  GetRecommendation(movieId:string,type:string='movie'):Observable<any>{
    
    return this._HttpClient.get(`
    https://api.themoviedb.org/3/${type}/${movieId}/recommendations?api_key=f00358d51b413f99420b153f15514668&language=en-US&page=1`)
  }
  GetwatchProvider(movieId:string,type:string='movie'):Observable<any>{
    
    return this._HttpClient.get(`
    https://api.themoviedb.org/3/${type}/${movieId}/watch/providers?api_key=f00358d51b413f99420b153f15514668`)
  }
  GetVideos(movieId:string,type:string='movie'):Observable<any>{
    
    return this._HttpClient.get(`
    https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=f00358d51b413f99420b153f15514668`)
  }
}
