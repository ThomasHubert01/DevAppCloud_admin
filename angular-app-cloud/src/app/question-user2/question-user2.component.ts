import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../../test/mock_movies';
import { Genre } from '../domain/genre';
import { Movie } from '../domain/movie';

@Component({
  selector: 'app-question-user2',
  templateUrl: './question-user2.component.html',
  styleUrls: ['./question-user2.component.css']
})
export class QuestionUser2Component implements OnInit {
  movies: Movie[];

  genrePlaceholder: Genre = {
    name: 'Genre...'
  };

  constructor() { }

  ngOnInit(): void {
  }

  readMovie(): void {
    this.movies = MOVIES;
    window.alert(this.genrePlaceholder.name);
  }
}
