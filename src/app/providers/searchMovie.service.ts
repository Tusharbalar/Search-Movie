import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchMovie {

  baseUrl = 'http://www.omdbapi.com/?t=Dhol&apikey=e260c91c';

  constructor(private http: Http) {

  }

  getMovieData(movieName) {
    return this.http.get(this.baseUrl).map(res => res.json()).catch(err => err);
  }

}
