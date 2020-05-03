import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movie;

title:string = "movie component";
movieTitle:string;
result;
  constructor(private omdb:OmdbService) { }

  ngOnInit() {
  }

  getMovieData() {
    this.omdb.getMovie().subscribe(
      response => this.movie = response
    )
  }

  searchMovieData(movieTitle:String) {
    console.log('searchMovieData');
    
    this.omdb.searchMovie(movieTitle)
    .subscribe((result) => {
      this.result = result ; 
      //  console.log(result.Title);
      //  console.log(result.Year);
       
    });
  }
  
}
