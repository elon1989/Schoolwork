import {Component, Input, OnInit} from '@angular/core';
import {Option, Question} from '../../models';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(question: Question, option: Option): void {
    if (question.questionTypeId === 1) { question.options.forEach((x) => { if (x.id !== option.id) { x.selected = false; } }); }
  }

}
