import { MongoService } from './../../../services/mongo.service';

import { MOVIES } from './../../../../test/mock_movies';
import { Movie } from './../../../domain/movie';
import { Component, OnInit } from '@angular/core';
import { FormControl} from "@angular/forms";
@Component({
  selector: 'app-user-top-films',
  templateUrl: './user-top-films.component.html',
  styleUrls: ['./user-top-films.component.css']
})
export class UserTopFilmsComponent implements OnInit {

  allMovie : Movie[] | undefined;
  genreTarget = new FormControl('');

  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
  }

  read_genre(): void{
    this.allMovie = MOVIES;
    window.alert(this.genreTarget.value);
  }
}
