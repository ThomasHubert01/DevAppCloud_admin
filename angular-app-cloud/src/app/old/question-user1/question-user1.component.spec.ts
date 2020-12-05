import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionUser1Component } from './question-user1.component';

describe('QuestionUser1Component', () => {
  let component: QuestionUser1Component;
  let fixture: ComponentFixture<QuestionUser1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [QuestionUser1Component]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
