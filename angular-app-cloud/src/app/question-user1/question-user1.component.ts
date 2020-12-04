import { Movie } from './../movie';
import { DIRECTORS } from './../mock_directors';
import { Director } from './../director';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-question-user1',
  templateUrl: './question-user1.component.html',
  styleUrls: ['./question-user1.component.css']
})
export class QuestionUser1Component implements OnInit {
  directors : Director[];
  movie_placeholder : Movie = {
    id : 0,
    title : "Movie",
    year : 2000
  }

  constructor() { }

  ngOnInit(): void {
  }

  Read_movie() {
    this.directors = DIRECTORS;
    window.alert(this.movie_placeholder.title);
  }

}
