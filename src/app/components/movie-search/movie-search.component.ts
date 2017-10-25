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

  constructor(private formBuilder: FormBuilder,
              private movieService: SearchMovie) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.movieForm = this.formBuilder.group({
      movieName: ['', Validators.required]
    });
  }

  searchMovie() {
    if (this.movieForm.invalid) {
      return;
    }

    this.movieService.getMovieData('s').subscribe((res) => {
      console.log(res);
    });

  }

}
