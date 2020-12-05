import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionUser4Component } from './question-user4.component';

describe('QuestionUser4Component', () => {
  let component: QuestionUser4Component;
  let fixture: ComponentFixture<QuestionUser4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [QuestionUser4Component]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionUser4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
