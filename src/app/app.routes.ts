import { Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MovieSearchComponent }
];
