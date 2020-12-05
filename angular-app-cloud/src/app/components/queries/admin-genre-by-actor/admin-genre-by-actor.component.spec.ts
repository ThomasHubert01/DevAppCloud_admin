import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenreByActorComponent } from './admin-genre-by-actor.component';

describe('AdminGenreByActorComponent', () => {
  let component: AdminGenreByActorComponent;
  let fixture: ComponentFixture<AdminGenreByActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenreByActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenreByActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
