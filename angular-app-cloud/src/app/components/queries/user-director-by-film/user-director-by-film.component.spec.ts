import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectorByFilmComponent } from './user-director-by-film.component';

describe('UserBestDirectorComponent', () => {
  let component: UserDirectorByFilmComponent;
  let fixture: ComponentFixture<UserDirectorByFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDirectorByFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDirectorByFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
