import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {QuestionUser1Component} from './question-user1/question-user1.component';
import {QuestionUser2Component} from './question-user2/question-user2.component';
import {QuestionUser3Component} from './question-user3/question-user3.component';
import {QuestionUser4Component} from './question-user4/question-user4.component';

const routes: Routes = [
  {path: 'question-user1-component', component: QuestionUser1Component},
  {path: 'question-user2-component', component: QuestionUser2Component},
  {path: 'question-user3-component', component: QuestionUser3Component},
  {path: 'question-user4-component', component: QuestionUser4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
