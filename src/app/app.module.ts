import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchMovie } from './providers/searchMovie.service';
import { RequestOptions, XHRBackend, HttpModule } from '@angular/http';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig),
  ],
  providers: [SearchMovie],
  bootstrap: [AppComponent]
})
export class AppModule { }
