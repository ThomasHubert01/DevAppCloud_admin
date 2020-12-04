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
  year : number = 2000;
  constructor() { }

  ngOnInit(): void {
  }

  Read_year(){
    this.actors = ACTORS;
    window.alert(this.year);
  }

}
