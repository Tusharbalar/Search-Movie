import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchMovie } from './providers/searchMovie.service';
import { RequestOptions, XHRBackend, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent
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
