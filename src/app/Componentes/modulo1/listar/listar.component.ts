import { Component, OnInit } from '@angular/core';

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

}
