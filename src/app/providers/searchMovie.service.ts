import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchMovie {

  baseUrl = 'http://www.omdbapi.com/?t=';

  constructor(private http: Http) {

  }

  getMovieData(movie) {
    let api = this.baseUrl + movie.movieName + '&apikey=e260c91c';
    if (movie.movieYear) { // check for years
      api = api + '&y=' + movie.movieYear;
    }
    return this.http.get(api).map(res => res.json()).catch((err) => {
      return err;
    });
  }

  private handleError() {
    // Error Handling
  }

}
