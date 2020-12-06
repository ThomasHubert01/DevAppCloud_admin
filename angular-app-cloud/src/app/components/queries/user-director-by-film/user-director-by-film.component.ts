import { Director } from './../../../domain/director';
import { DIRECTORS } from './../../../../test/mock_directors';
import { Movie } from './../../../domain/movie';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-user-director-by-film',
  templateUrl: './user-director-by-film.component.html',
  styleUrls: ['./user-director-by-film.component.css']
})
export class UserDirectorByFilmComponent implements OnInit {

  allDirector : Director[] | undefined;
  movieName = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  read_movie(): void{
    this.allDirector = DIRECTORS;
    window.alert(this.movieName.value);
  }

}
