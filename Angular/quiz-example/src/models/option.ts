export class Option {
  id: number;
  questionId: number;
  name: string;
  isAnswer: boolean;
  selected: boolean;

  constructor(optionData: any) {
    optionData = optionData || {};
    this.id = optionData.id;
    this.questionId = optionData.questionId;
    this.name = optionData.name;
    this.isAnswer = optionData.isAnswer;
  }
}
