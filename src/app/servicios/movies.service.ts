import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Movies } from '../Modelos/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  URL = 'http://localhost:4000/'
  
  selectedMovie : Movies = {
    titulo : '',
    calificacion : 0,
    pais : ''
  };

  peliculas : Movies[];

  constructor(public http: HttpClient){}

  getMovies(){
    return this.http.get<Movies[]>(this.URL+'/movies');
  }

  createMovie(movie : Movies){
    return this.http.post(this.URL+'/movies', movie)
  }

}
