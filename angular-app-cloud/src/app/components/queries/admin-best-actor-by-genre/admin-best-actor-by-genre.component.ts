import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Actor } from "../../../domain/actor";
import { Genre } from "../../../domain/genre";
import { MongoService } from "../../../services/mongo.service";

@Component({
  selector: 'app-admin-best-actor-by-genre',
  templateUrl: './admin-best-actor-by-genre.component.html',
  styleUrls: ['./admin-best-actor-by-genre.component.css']
})
export class AdminBestActorByGenreComponent implements OnInit {
  genreInput = new FormControl(null, [Validators.required]);
  genres: Genre[] = []
  actors: Actor | null = null

  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {
    this.mongoService.getAllGenres().subscribe(next => {
      this.genres = next
    })
  }

  loadActor(): void {
    this.genreInput.markAsTouched()
    if (this.genreInput.valid) {
      this.mongoService.getBestActor(this.genreInput.value).subscribe(next => this.actors = next)
    }
  }

  getErrorMessage(): string {
    return this.genreInput.hasError('required') ? 'You must enter a value' : '';
  }

}
