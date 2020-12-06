import { DIRECTORS } from './../../../../test/mock_directors';
import { Director } from './../../../domain/director';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-admin-genre-over-years',
  templateUrl: './admin-genre-over-years.component.html',
  styleUrls: ['./admin-genre-over-years.component.css']
})
export class AdminGenreOverYearsComponent implements OnInit {

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
