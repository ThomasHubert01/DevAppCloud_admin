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

  allmovies : Movie | undefined;

  firstNameInput = new FormControl(null, [Validators.required]);
  lastNameInput = new FormControl(null, [Validators.required]);



  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
  }

  read_actor(): void {
    this.firstNameInput.markAsTouched();
    this.lastNameInput.markAsTouched();
    console.log(this.lastNameInput.valid);
    if (this.firstNameInput.valid && this.lastNameInput.valid) {
      console.log("API");
      this.mongoService.getBestFilmByActor(this.firstNameInput.value, this.lastNameInput.value).subscribe( response => {
        this.allmovies = response;
        console.log(response);
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
