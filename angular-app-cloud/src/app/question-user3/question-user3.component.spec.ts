import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionUser3Component } from './question-user3.component';

describe('QuestionUser3Component', () => {
  let component: QuestionUser3Component;
  let fixture: ComponentFixture<QuestionUser3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionUser3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionUser3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
