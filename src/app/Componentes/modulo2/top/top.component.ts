import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/servicios/movies.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  getTopMovies(){
    this.moviesService.getTop().subscribe(
      res => {
        this.moviesService.top = res;
      },
      err => console.error(err)
    );
  }

}
