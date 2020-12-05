import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MongoService } from "../../../services/mongo.service";

@Component({
  selector: 'app-admin-genre-by-actor',
  templateUrl: './admin-genre-by-actor.component.html',
  styleUrls: ['./admin-genre-by-actor.component.css']
})
export class AdminGenreByActorComponent implements OnInit {
  firstNameInput = new FormControl(null, [Validators.required]);
  lastNameInput = new FormControl(null, [Validators.required]);

  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
  }

  loadGenres(): void {
    this.firstNameInput.markAsTouched()
    this.lastNameInput.markAsTouched()
    if (this.firstNameInput.valid && this.lastNameInput.valid) {
      console.log("search genres")
    }
  }

  getErrorMessageFirstName(): string {
    return this.firstNameInput.hasError('required') ? 'You must enter a first name' : '';
  }

  getErrorMessageLastNameInput(): string {
    return this.lastNameInput.hasError('required') ? 'You must enter a last name' : '';
  }
}
