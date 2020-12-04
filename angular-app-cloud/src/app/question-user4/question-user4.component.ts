import { Movie } from './../movie';
import { Actor } from './../actor';
import { MOVIES } from './../mock_movies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-user4',
  templateUrl: './question-user4.component.html',
  styleUrls: ['./question-user4.component.css']
})
export class QuestionUser4Component implements OnInit {

  movies : Movie[];
  targeted_actor : Actor = {
    firstname:'Firstname',
    lastname:'Lastname'
  }
  constructor() { }

  ngOnInit(): void {
  }

  Read_actor(){
    this.movies = MOVIES;
    window.alert(this.targeted_actor.firstname + ' ' + this.targeted_actor.lastname);
  }
}
