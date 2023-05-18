import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularPeopleService {

  constructor(private HttpClient:HttpClient) { }

  GetPopularPeople(P:number=1):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=f00358d51b413f99420b153f15514668&language=en-US&page=${P}`)
  }
  GetPersonDetail(id:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=f00358d51b413f99420b153f15514668&language=en-US`)
  }
  GetPersonMovie(id:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=f00358d51b413f99420b153f15514668&language=en-US`)
  }
}
