import { MongoService } from './../../../services/mongo.service';
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

  firstNameInput = new FormControl(null, [Validators.required]);
  lastNameInput = new FormControl(null, [Validators.required]);



  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
  }

  read_actor(): void {
    this.firstNameInput.markAsTouched();
    this.lastNameInput.markAsTouched();
    if (this.firstNameInput.valid && this.lastNameInput.valid) {
      this.mongoService.getBestFilmByActor(this.lastNameInput.value, this.firstNameInput.value).subscribe( response => {
        this.allmovies = response;
      });

    }

  }

  getErrorMessageFirstName(): string {
    return this.firstNameInput.hasError('required') ? 'You must enter a first name' : '';
  }

  getErrorMessageLastNameInput(): string {
    return this.lastNameInput.hasError('required') ? 'You must enter a last name' : '';
  }

}
