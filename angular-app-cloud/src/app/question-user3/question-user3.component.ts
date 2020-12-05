import { Component, OnInit } from '@angular/core';
import { ACTORS } from '../../test/mock_actors';
import { Actor } from '../domain/actor';


@Component({
  selector: 'app-question-user3',
  templateUrl: './question-user3.component.html',
  styleUrls: ['./question-user3.component.css']
})
export class QuestionUser3Component implements OnInit {
  actors: Actor[];
  genrePlaceholder = 'Genre...';

  constructor() { }

  ngOnInit(): void {
  }

  readGenre(): void {
    this.actors = ACTORS;
    window.alert(this.genrePlaceholder);
  }

}
