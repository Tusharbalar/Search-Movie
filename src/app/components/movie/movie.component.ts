import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit {

  private movie_details = '';
  private err;

  constructor() { }

  ngOnInit() {
  }

  onSearch(movie) {
    if (!movie.Error) {
      this.movie_details = movie;
      this.err = '';
    } else {
      this.err = movie;
      this.movie_details = '';
    }
  }

}
