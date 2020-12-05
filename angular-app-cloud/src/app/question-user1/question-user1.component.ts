import { Component, OnInit } from '@angular/core';
import { DIRECTORS } from '../../test/mock_directors';
import { Director } from '../domain/director';
import { Movie } from '../domain/movie';


@Component({
  selector: 'app-question-user1',
  templateUrl: './question-user1.component.html',
  styleUrls: ['./question-user1.component.css']
})
export class QuestionUser1Component implements OnInit {
  directors: Director[] = [];
  moviePlaceholder: Movie = {
    id: 0,
    title: 'Movie',
    year: 2000
  };

  constructor() { }

  ngOnInit(): void {
  }

  readMovie(): void {
    this.directors = DIRECTORS;
    window.alert(this.moviePlaceholder.title);
  }

}
