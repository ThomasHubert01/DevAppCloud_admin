import { DIRECTORS } from './../../../../test/mock_directors';
import { Director } from './../../../domain/director';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";


import { MongoService } from "../../../services/mongo.service";
import {Genre} from "../../../domain/genre";


@Component({
  selector: 'app-admin-genre-over-years',
  templateUrl: './admin-genre-over-years.component.html',
  styleUrls: ['./admin-genre-over-years.component.css']
})
export class AdminGenreOverYearsComponent implements OnInit {
  filmName = new FormControl(null, [Validators.required]);
  genres : Genre[] | undefined;
  response : any[] = [];

  constructor(private mongoService: MongoService) { }


  ngOnInit(): void {
    this.mongoService.getAllGenres().subscribe(res => {
      this.genres = res;
    })
  }


  loadGenres(): void {
    this.filmName.markAsTouched()
    if (this.filmName.valid) {
      this.mongoService.getGenresOverYears(this.filmName.value).subscribe(res => {
        this.response=res;
      })
    }
  }

  getErrorMessage(): string {
    return this.filmName.hasError('required') ? 'You must enter a genre' : '';
  }

}
