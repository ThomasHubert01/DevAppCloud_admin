import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DirectorsSuccessResult} from "../../test/mock-director-success";
import {Actor} from "../domain/actor";
import {Genre} from "../domain/genre";

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  createRequestOption = (req?: any): HttpParams => {
    let options: HttpParams = new HttpParams();
    if (req) {
      Object.keys(req).forEach(key => {
        options = options.set(key, req[key]);

      });
    }
    return options;
  };

  private resourceUrl = "http://localhost:9292";

  constructor(private http: HttpClient) {
  }

  getDirectorSuccess(req?: any): Observable<DirectorsSuccessResult[]> {
    const options = this.createRequestOption(req);
    return this.http
      .get<DirectorsSuccessResult[]>(`${this.resourceUrl}/movies/director/evolution`, {
        params: options,
        observe: 'response'
      })
      .pipe(map((res: any) => res.body));
  }

  getAllGenres(): Observable<Genre[]> {
    return this.http
      .get<Genre[]>(`${this.resourceUrl}/genre/all`, {observe: 'response'})
      .pipe(map((res: any) => res.body))
  }

  getBestActor(genre: string): Observable<Actor> {
    const options = this.createRequestOption({genre});
    return this.http
      .get<Actor>(`${this.resourceUrl}/movies/genre/bestactor`, {
        params: options,
        observe: 'response'
      })
      .pipe(map((res: any) => res.body))
  }


  getBestFilmByActor(lastName: string, firstName: string): Observable<any> {
    const options = this.createRequestOption({"lastName": lastName, "firstName": firstName});
    return this.http.get<any>(`${this.resourceUrl}/movies/bestmovie/actor`, {
      params: options,
      observe: 'response'
    })
      .pipe(map((res: any) => res.body))
  }


  getTopActors(year: number): Observable<any> {
    const options = this.createRequestOption({"year": year});
    return this.http.get<any>(`${this.resourceUrl}/actors/top10/year`, {
      params: options,
      observe: 'response'
    })
      .pipe(map((res: any) => res.body))

  }

  getGenresOverYears(genre: string): Observable<any> {
    const options = this.createRequestOption({"genre": genre});
    return this.http.get<any>(`${this.resourceUrl}/movies/evolution/year`, {
      params: options,
      observe: 'response'
    })
      .pipe(map((res: any) => res.body))
  }

  getTopFilm(genre: string): Observable<any> {
    const options = this.createRequestOption({"genre": genre});
    return this.http.get<any>(`${this.resourceUrl}/movies/genre`, {
      params: options,
      observe: 'response'
    })
      .pipe(map((res: any) => res.body))
  }

  getGenresByActor(firstName: string, lastName: string): Observable<any> {
    const options = this.createRequestOption({"lastName": lastName, "firstName": firstName});
    return this.http.get<any>(`${this.resourceUrl}/actors/genre`, {
      params: options,
      observe: 'response'
    })
      .pipe(map((res: any) => res.body))
  }

  getDirectorByFilm(film: string): Observable<any> {
    const options = this.createRequestOption({"film": film});
    return this.http.get<any>(`${this.resourceUrl}/movies/director`, {
      params: options,
      observe: 'response'
    })
      .pipe(map((res: any) => res.body))
  }
}

