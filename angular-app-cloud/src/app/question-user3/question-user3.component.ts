import { Actor } from './../actor';
import { Component, OnInit } from '@angular/core';
import { ACTORS} from './../mock_actors';


@Component({
  selector: 'app-question-user3',
  templateUrl: './question-user3.component.html',
  styleUrls: ['./question-user3.component.css']
})
export class QuestionUser3Component implements OnInit {
  actors : Actor[];
  genre_placeholder : string = 'Genre...';
  constructor() { }

  ngOnInit(): void {
  }

  Read_genre(){
    this.actors = ACTORS;
    window.alert(this.genre_placeholder);
  }

}
