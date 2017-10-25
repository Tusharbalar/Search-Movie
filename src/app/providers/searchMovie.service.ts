import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchMovie {

  baseUrl = 'http://www.omdbapi.com/?t=';

  constructor(private http: Http) {

  }

  getMovieData(movieName) {
    const api = this.baseUrl + movieName + '&apikey=e260c91c';
    return this.http.get(api).map(res => res.json()).catch((err) => {
      console.log(err);
      return err;
    });
  }

  private handleError() {

  }

}
