import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  @Output()
  private emitData = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private movieService: SearchMovie) { }

  // Called After component render into DOM
  ngOnInit() {
    this.initForm();
    this.searchMovie();
  }

  // Reactive Form Module
  initForm() {
    this.movieForm = this.formBuilder.group({
      movieName: ['Dhol', Validators.required],
      movieYear: ['']
    });
  }

  // Search Movie By Name and Year
  searchMovie() {
    if (this.movieForm.invalid) {
      return;
    }

    this.movieService.getMovieData(this.movieForm.value).subscribe((res) => {
      this.emitData.emit(res);
    });
  }

}
