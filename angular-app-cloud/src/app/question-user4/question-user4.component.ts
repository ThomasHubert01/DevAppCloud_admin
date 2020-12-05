import { Component, OnInit } from '@angular/core';
import { GENRE_PROP } from '../../test/mock_genre';
import { Actor } from '../domain/actor';
import { GenreProportion } from '../domain/genre_proportion';

@Component({
  selector: 'app-question-user4',
  templateUrl: './question-user4.component.html',
  styleUrls: ['./question-user4.component.css']
})
export class QuestionUser4Component implements OnInit {

  allGenres: GenreProportion[];
  targetedActor: Actor = {
    firstName: 'Firstname',
    lastName: 'Lastname'
  };

  constructor() { }

  ngOnInit(): void {
  }

  readActor(): void {
    this.allGenres = GENRE_PROP;
    window.alert(this.targetedActor.firstName + ' ' + this.targetedActor.lastName);
  }
}
