import { Component, OnInit } from '@angular/core';
import { MongoService } from "../../../services/mongo.service";

@Component({
  selector: 'app-admin-directors-success',
  templateUrl: './admin-directors-success.component.html',
  styleUrls: ['./admin-directors-success.component.css']
})
export class AdminDirectorsSuccessComponent implements OnInit {

  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {}


}
