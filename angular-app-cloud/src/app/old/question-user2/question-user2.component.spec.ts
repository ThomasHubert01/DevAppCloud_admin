import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionUser2Component } from './question-user2.component';

describe('QuestionUser2Component', () => {
  let component: QuestionUser2Component;
  let fixture: ComponentFixture<QuestionUser2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [QuestionUser2Component]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
