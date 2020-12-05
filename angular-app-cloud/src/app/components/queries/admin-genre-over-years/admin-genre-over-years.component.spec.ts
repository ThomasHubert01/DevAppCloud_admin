import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenreOverYearsComponent } from './admin-genre-over-years.component';

describe('AdminGenreByYearsComponent', () => {
  let component: AdminGenreOverYearsComponent;
  let fixture: ComponentFixture<AdminGenreOverYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenreOverYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenreOverYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
