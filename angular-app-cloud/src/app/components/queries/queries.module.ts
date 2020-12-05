import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../shared-module/material.module";
import { AdminBestActorByGenreComponent } from "./admin-best-actor-by-genre/admin-best-actor-by-genre.component";
import { AdminDirectorsSuccessComponent } from "./admin-directors-success/admin-directors-success.component";
import { AdminGenreByActorComponent } from "./admin-genre-by-actor/admin-genre-by-actor.component";
import { AdminGenreOverYearsComponent } from "./admin-genre-over-years/admin-genre-over-years.component";
import { UserBestFilmByActorComponent } from "./user-best-film-by-actor/user-best-film-by-actor.component";
import { UserDirectorByFilmComponent } from "./user-director-by-film/user-director-by-film.component";
import { UserTopActorsComponent } from "./user-top-actors/user-top-actors.component";
import { UserTopFilmsComponent } from "./user-top-films/user-top-films.component";


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserDirectorByFilmComponent,
    UserTopFilmsComponent,
    UserTopActorsComponent,
    UserBestFilmByActorComponent,
    AdminGenreOverYearsComponent,
    AdminDirectorsSuccessComponent,
    AdminBestActorByGenreComponent,
    AdminGenreByActorComponent],
  exports: [
    UserDirectorByFilmComponent,
    UserTopFilmsComponent,
    UserTopActorsComponent,
    UserBestFilmByActorComponent,
    AdminGenreOverYearsComponent,
    AdminDirectorsSuccessComponent,
    AdminBestActorByGenreComponent,
    AdminGenreByActorComponent]
})
export class QueriesModule {
}
