import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizRootComponent } from './quiz-root/quiz-root.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { QuestionOptionComponent } from './question-option/question-option.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuizRootComponent,
    QuizQuestionComponent,
    QuestionOptionComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
