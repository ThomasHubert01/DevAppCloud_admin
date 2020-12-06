import { FormsModule } from '@angular/forms';
import { MOVIES } from './../../../../test/mock_movies';
import { Component, OnInit } from '@angular/core';
//import { Actor } from '../app/domain/actor';
import { Actor } from '../../../domain/actor';
import { Movie } from '../../../domain/movie'
import { FormControl, Validators } from "@angular/forms";
import { FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-user-best-film-by-actor',
  templateUrl: './user-best-film-by-actor.component.html',
  styleUrls: ['./user-best-film-by-actor.component.css']
})
export class UserBestFilmByActorComponent implements OnInit {

  allmovies : Movie[] | undefined;

  firstNameInput = new FormControl('');
  lastNameInput = new FormControl('');



  constructor() { }

  ngOnInit(): void {
  }

  read_actor(): void {
    this.allmovies = MOVIES;
    window.alert(this.firstNameInput.value + ' ' + this.lastNameInput.value);
  }

}
