import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Modelos/movies';

/* Servicio */
import { MoviesService } from '../../../servicios/movies.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    console.log(this.moviesService.getMovies().subscribe(
      res => {
        this.moviesService.peliculas = res;
      },
      err => console.error(err)
    ));
  }

  deleteMovie(id:string){
    if (confirm('¿Desea eliminar la pelicula de la Base de Datos?')){
      this.moviesService.deleteMovie(id).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }
  }

  /* editMovie(movie : Movies){
    //Llenar el formulario
    this.moviesService.selectedMovie = movie;

    //Editar los datos del formulario

  } */

}
