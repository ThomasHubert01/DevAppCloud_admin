import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopActorsComponent } from './user-top-actors.component';

describe('UserTopActorsComponent', () => {
  let component: UserTopActorsComponent;
  let fixture: ComponentFixture<UserTopActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
