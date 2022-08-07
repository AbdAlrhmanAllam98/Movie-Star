import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient:HttpClient) { }
  private API_KEY="6f684a2a64a1be878f95628e22a53be6";
  public imgPrefix:string="https://image.tmdb.org/t/p/w500";
  
  getTrending(mediaType:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${this.API_KEY}`);
  }
  getMovieData(movieID:string,movieType:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/${movieType}/${movieID}?api_key=${this.API_KEY}&language=en-US`)

  }
}
