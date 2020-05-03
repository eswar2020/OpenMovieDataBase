import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http:HttpClient) { }


  getMovie() {
  return this.http.get("http://www.omdbapi.com/?t=avengers&apikey=1afef20d");
  }

  searchMovie(movieTitle:String) {
    return this.http.get("http://www.omdbapi.com/?t=" + movieTitle + "&apikey=1afef20d");
  }
}
