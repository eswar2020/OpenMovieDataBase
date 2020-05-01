import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movie;
  constructor(private omdb:OmdbService) { }

  ngOnInit() {
  }

    getMovieData() {
     this.omdb.getMovie().subscribe(
       response => this.movie = response
     )
    }
}
