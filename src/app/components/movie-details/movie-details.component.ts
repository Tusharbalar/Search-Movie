import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SearchMovie } from '../../providers/searchMovie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html'
})

export class MovieDetailsComponent {

  @Input()
  private details;
}

