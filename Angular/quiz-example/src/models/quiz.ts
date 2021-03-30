import {Question} from './question';

export class Quiz {
  id: number;
  name: string;
  description: string;
  questions: Question[];

  constructor(quizData: any) {
    quizData = quizData || {};
    this.id = quizData.id;
    this.name = quizData.name;
    this.description = quizData.description;
    this.questions = [];
    quizData.questions.forEach(q => this.questions.push(new Question(q)));
  }
}
