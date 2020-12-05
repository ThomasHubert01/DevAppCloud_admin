import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDirectorsSuccessComponent } from './admin-directors-success.component';

describe('AdminDirectorsSuccessComponent', () => {
  let component: AdminDirectorsSuccessComponent;
  let fixture: ComponentFixture<AdminDirectorsSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDirectorsSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDirectorsSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
