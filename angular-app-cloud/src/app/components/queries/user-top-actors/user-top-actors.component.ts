import { ACTORS } from './../../../../test/mock_actors';
import { Actor } from './../../../domain/actor';
import { Component, OnInit } from '@angular/core';
import { FormControl} from "@angular/forms";
@Component({
  selector: 'app-user-top-actors',
  templateUrl: './user-top-actors.component.html',
  styleUrls: ['./user-top-actors.component.css']
})
export class UserTopActorsComponent implements OnInit {


  anneeTarget = new FormControl('');
  allActor : Actor[] | undefined;

  constructor() { }



  ngOnInit(): void {
    this.allActor = ACTORS;
    window.alert(this.anneeTarget.value)
  }

  read_year(): void{
    this.allActor = ACTORS;
    window.alert(this.anneeTarget.value);
  }

}
