import { MongoService } from './../../../services/mongo.service';

import { MOVIES } from './../../../../test/mock_movies';
import { Movie } from './../../../domain/movie';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-user-top-films',
  templateUrl: './user-top-films.component.html',
  styleUrls: ['./user-top-films.component.css']
})
export class UserTopFilmsComponent implements OnInit {

  allMovie : Movie[] | undefined;
  genreTarget = new FormControl(null, [Validators.required]);

  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
  }

  read_genre(): void{
    this.genreTarget.markAllAsTouched();
    if(this.genreTarget.valid){
      this.mongoService.getTopFilm(this.genreTarget.value).subscribe( response => {
        this.allMovie = response;
      });
    }
  }

  getErrorMessageGenre(): string {
    return this.genreTarget.hasError('required') ? 'You must enter a valid genre' : '';
  }
}
