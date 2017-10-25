import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SearchMovie } from '../../providers/searchMovie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movieName = '';
  movieForm: FormGroup;

  private movie_details;

  constructor(private formBuilder: FormBuilder,
              private movieService: SearchMovie) { }

  ngOnInit() {
    this.initForm();
    this.searchMovie();
  }

  initForm() {
    this.movieForm = this.formBuilder.group({
      movieName: ['Dhol', Validators.required]
    });
  }

  searchMovie() {
    if (this.movieForm.invalid) {
      return;
    }

    const name = this.movieForm.value.movieName;

    this.movieService.getMovieData(name).subscribe((res) => {
      console.log(res);
      this.movie_details = res;
    });

  }

}
