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

  /* servicio: [get] backendUrl + /movies */
  getMovies(){
    return this.http.get<Movies[]>(this.URL+'/movies');
  }

  /* servicio: [post] backendUrl + /movies */
  createMovie(movie : Movies){
    return this.http.post(this.URL+'/movies', movie)
  }

  /* servicio: [delete] backendUrl + /movies:id */
  deleteMovie(id : string){
    return this.http.delete(this.URL+'/movies/:id')
  }

  /* editMovie(movie : Movies){
    return this.http.put(this.URL+'/movies/:id')
  } */

}
