import { Injectable, OnInit } from '@angular/core';
import movies from '../sample-movies';

interface Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}

@Injectable()
export class MoviesinfoService {
  movies: Array<Movie> = movies;

  constructor() { }



  getMovies() { return this.movies; }

  getMovie(id) { return this.movies[0].id; }

}
