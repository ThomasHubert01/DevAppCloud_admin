import { MongoService } from './../../../services/mongo.service';
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
  movieName = new FormControl(null, [Validators.required]);
  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
  }

  read_movie(): void{
    this.movieName.markAllAsTouched();
    if(this.movieName.valid){

      this.mongoService.getDirectorByFilm(this.movieName.value).subscribe( response => {
        this.allDirector = response;

      });
    }
  }


  getErrorMessageMovie(): string {
    return this.movieName.hasError('required') ? 'You must enter a Movie name' : '';
  }
}
