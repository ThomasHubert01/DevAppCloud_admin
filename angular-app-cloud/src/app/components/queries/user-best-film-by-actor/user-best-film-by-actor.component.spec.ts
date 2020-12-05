import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBestFilmByActorComponent } from './user-best-film-by-actor.component';

describe('UserBestFilmComponent', () => {
  let component: UserBestFilmByActorComponent;
  let fixture: ComponentFixture<UserBestFilmByActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBestFilmByActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBestFilmByActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
