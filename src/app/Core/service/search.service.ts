import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private HttpClient:HttpClient) { }

  Getmovies(searchterm:string,pageNumber:number=1):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=f00358d51b413f99420b153f15514668&language=en-US&query=${searchterm}&page=${pageNumber}&include_adult=false`)
  }
  GetTvShows(searchterm:string,pageNumber:number=1):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/search/tv?api_key=f00358d51b413f99420b153f15514668&language=en-US&page=${pageNumber}&query=${searchterm}&include_adult=false`)
  }
  Getpeople(searchterm:string,pageNumber:number=1):Observable<any>{
    return this.HttpClient.get(`
    https://api.themoviedb.org/3/search/person?api_key=f00358d51b413f99420b153f15514668&language=en-US&query=${searchterm}&page=${pageNumber}&include_adult=false`)
  }
}
