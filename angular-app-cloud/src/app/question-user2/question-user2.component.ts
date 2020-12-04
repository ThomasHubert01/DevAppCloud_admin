import { Genre } from './../genre';
import { Movie } from './../movie';
import { MOVIES } from './../mock_movies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-user2',
  templateUrl: './question-user2.component.html',
  styleUrls: ['./question-user2.component.css']
})
export class QuestionUser2Component implements OnInit {
  movies : Movie[];

  genre_placeholder : Genre ={
    name: 'Genre...'
  }
  constructor() { }

  ngOnInit(): void {
  }

  Read_genre() {
    this.movies = MOVIES;
    window.alert(this.genre_placeholder.name);
  }
}
