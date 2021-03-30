import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {Option, Question, Quiz} from '../../models';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-quiz-root',
  templateUrl: './quiz-root.component.html',
  styleUrls: ['./quiz-root.component.css']
})
export class QuizRootComponent implements OnInit {

  quiz: Quiz;
  questions;
  mode: string;

  constructor(private quizService: QuizService, private http: HttpClient) {
    this.questions = [];
  }

  ngOnInit(): void {
    // this.quiz = this.quizService.getSampleQuiz();
    this.http.get(this.quizService.getSampleQuizUrl()).subscribe(res => {
      this.quiz = new Quiz(res);
      // @ts-ignore
      for (const question of this.quiz.questions.entries()) {
        this.questions.push(question);
      }
      this.mode = 'quiz';
    });
    // console.log(this.quiz.name);
  }

  onSubmit(): void {
    this.mode = 'results';
    return;
  }

  returnToQuiz(): void {
    this.mode = 'quiz';
  }

  onSelect(question: Question, option: Option): void {
    if (question.questionTypeId === 1) { question.options.forEach((x) => { if (x.id !== option.id) { x.selected = false; } }); }
  }

  isCorrect(question: Question): 'correct' | 'wrong' {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  }
}
