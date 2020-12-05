import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { MongoService } from "../../../services/mongo.service";

export interface DirectorsSuccessResult {
  _id: {
    year: number,
    genre: string
  },
  success: number,
  first_name: string,
  last_name: string
}

@Component({
  selector: 'app-admin-directors-success',
  templateUrl: './admin-directors-success.component.html',
  styleUrls: ['./admin-directors-success.component.css']
})
export class AdminDirectorsSuccessComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['year', 'genre', 'director', 'rank'];
  dataSource = new MatTableDataSource<DirectorsSuccessResult>([])

  private loadingSubject = new BehaviorSubject<boolean>(false);
  @ViewChild(MatPaginator) private _paginator!: MatPaginator;

  constructor(private mongoService: MongoService) {}

  get loading$(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  ngOnInit(): void {
    this.loadingSubject.next(true);
    this.mongoService.getDirectorSuccess()
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe(next => {
          this.dataSource.data = next
        }
      )
  }

  ngAfterViewInit() {
    this.dataSource!.paginator = this._paginator;
  }
}
