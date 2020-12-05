import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBestActorByGenreComponent } from './admin-best-actor-by-genre.component';

describe('AdminBestActorByGenreComponent', () => {
  let component: AdminBestActorByGenreComponent;
  let fixture: ComponentFixture<AdminBestActorByGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBestActorByGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBestActorByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
