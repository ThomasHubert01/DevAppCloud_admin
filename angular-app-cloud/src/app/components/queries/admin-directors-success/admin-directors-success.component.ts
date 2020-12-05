import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DirectorsSuccessResult } from "../../../../test/mock-director-success";
import { MongoService } from "../../../services/mongo.service";

@Component({
  selector: 'app-admin-directors-success',
  templateUrl: './admin-directors-success.component.html',
  styleUrls: ['./admin-directors-success.component.css']
})
export class AdminDirectorsSuccessComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['year', 'genre', 'director', 'rank'];
  dataSource: MatTableDataSource<DirectorsSuccessResult> | null = null

  @ViewChild(MatPaginator) private _paginator!: MatPaginator;

  constructor(private mongoService: MongoService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.mongoService.getDirectorSuccess());
  }

  ngAfterViewInit() {
    this.dataSource!.paginator = this._paginator;
  }
}
