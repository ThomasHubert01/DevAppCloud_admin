import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MongoService } from "../../../services/mongo.service";

@Component({
  selector: 'app-admin-genre-over-years',
  templateUrl: './admin-genre-over-years.component.html',
  styleUrls: ['./admin-genre-over-years.component.css']
})
export class AdminGenreOverYearsComponent implements OnInit {
  filmName = new FormControl(null, [Validators.required]);

  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
  }

  loadGenres(): void {
    this.filmName.markAsTouched()
    if (this.filmName.valid) {
      console.log("search genres")
    }
  }

  getErrorMessage(): string {
    return this.filmName.hasError('required') ? 'You must enter a first name' : '';
  }
}
