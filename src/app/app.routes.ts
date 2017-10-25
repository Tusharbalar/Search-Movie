import { Routes } from '@angular/router';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieComponent } from './components/movie/movie.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MovieComponent }
];
