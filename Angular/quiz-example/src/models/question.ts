import {Option} from './option';

export class Question {
  id: number;
  name: string;
  questionTypeId: number;
  options: Option[];
  answered: boolean;

  constructor(questionData: any) {
    questionData = questionData || {};
    this.id = questionData.id;
    this.name = questionData.name;
    this.questionTypeId = questionData.questionTypeId;
    this.options = [];
    questionData.options.forEach(o => this.options.push(new Option(o)));
  }
}
