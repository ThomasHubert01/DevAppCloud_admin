import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { DIRECTOR_SUCCESS, DirectorsSuccessResult } from "../../test/mock-director-success";

@Injectable({
  providedIn: 'root'
})
export class MongoService implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  getDirectorSuccess(): DirectorsSuccessResult[] {
    return DIRECTOR_SUCCESS
  }
}
