import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MoviesService } from 'src/app/servicios/movies.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  addMovie(form: NgForm) {
    //console.log(form.value)
    this.moviesService.createMovie(form.value).subscribe(
      res => {
        console.log(res)
        alert('Pelicula agregada')
      },
      err => console.error(err)
    )
  }

}
