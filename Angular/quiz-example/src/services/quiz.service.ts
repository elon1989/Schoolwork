import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quiz} from '../models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[];
  localQuizzesFolder: string;
  quizzesDataPath: string[];

  constructor(private http: HttpClient) {
    this.quizzes = [];
    this.localQuizzesFolder = 'assets/quizzes/';
    this.quizzesDataPath = ['javascript.json'];
  }

  getQuizzesFromServer(url: string): any {
    this.http.get(url).subscribe(res => this.quizzes.push(new Quiz(res)));
    return this.quizzes;
  }

  getQuizzesFromLocal(): any {
    this.quizzesDataPath.forEach(quizDataPath => {
      // console.log('get: ' + this.localQuizzesFolder + quizDataPath);
      this.http.get(this.localQuizzesFolder + quizDataPath).subscribe(
        res => {
          this.quizzes.push(new Quiz(res));
        });
    });
    console.log(this.quizzes.length);
    return this.quizzes;
  }

  getQuizzes(url: string = ''): any {
    // return url ? this.getQuizzesFromServer(url) : this.getQuizzesFromLocal();
    return this.getQuizzesFromLocal();
  }

  getSampleQuiz(): Quiz {
    let sampleQuiz: Quiz;
    this.http.get(this.localQuizzesFolder + this.quizzesDataPath[0]).subscribe(
      res => {
        console.log(res);
        sampleQuiz = new Quiz(res);
      });
    console.log(sampleQuiz);
    return sampleQuiz;
  }

  getSampleQuizUrl(): string {
    return this.localQuizzesFolder + this.quizzesDataPath[0];
  }
}
