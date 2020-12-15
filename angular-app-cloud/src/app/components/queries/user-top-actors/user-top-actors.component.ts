import { MongoService } from './../../../services/mongo.service';
import { ACTORS } from './../../../../test/mock_actors';
import { Actor } from './../../../domain/actor';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-user-top-actors',
  templateUrl: './user-top-actors.component.html',
  styleUrls: ['./user-top-actors.component.css']
})
export class UserTopActorsComponent implements OnInit {

  allActor : Actor[] | undefined;
  anneeTarget = new FormControl(null, [Validators.required]);


  constructor(private mongoService: MongoService) { }



  ngOnInit(): void {
  }

  read_year(): void{
    this.anneeTarget.markAllAsTouched();
    if(this.anneeTarget.valid){
      this.mongoService.getTopActors(this.anneeTarget.value).subscribe( response => {
        this.allActor = response;
      });
    }
  }


  getErrorMessageYear(): string {
    return this.anneeTarget.hasError('required') ? 'You must enter a year' : '';
  }
}
