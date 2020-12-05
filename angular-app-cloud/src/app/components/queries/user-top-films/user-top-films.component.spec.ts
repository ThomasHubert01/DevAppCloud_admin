import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopFilmsComponent } from './user-top-films.component';

describe('UserTopFilmsComponent', () => {
  let component: UserTopFilmsComponent;
  let fixture: ComponentFixture<UserTopFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
