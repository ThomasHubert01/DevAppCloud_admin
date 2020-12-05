import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionSelectorComponent } from './question-selector/question-selector.component';
import { QuestionUser1Component } from './question-user1/question-user1.component';
import { QuestionUser2Component } from './question-user2/question-user2.component';
import { QuestionUser3Component } from './question-user3/question-user3.component';
import { QuestionUser4Component } from './question-user4/question-user4.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionSelectorComponent,
    QuestionUser1Component,
    QuestionUser2Component,
    QuestionUser3Component,
    QuestionUser4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
