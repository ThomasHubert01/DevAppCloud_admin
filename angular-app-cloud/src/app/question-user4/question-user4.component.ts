import { GENRE_PROP } from './../mock_genre_proportion';
import { Genre_proportion } from './../genre_proportion';
import { Actor } from './../actor';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-question-user4',
  templateUrl: './question-user4.component.html',
  styleUrls: ['./question-user4.component.css']
})
export class QuestionUser4Component implements OnInit {

  all_genres : Genre_proportion[];
  targeted_actor : Actor = {
    firstname:'Firstname',
    lastname:'Lastname'
  }
  constructor() { }

  ngOnInit(): void {
  }

  Read_actor(){
    this.all_genres = GENRE_PROP;
    window.alert(this.targeted_actor.firstname + ' ' + this.targeted_actor.lastname);
  }
}
