import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuizQuestionList } from '../models/quiz-question-list.model';
import { QuizResults } from '../models/quiz-results.model';
import { Wine } from '../models/wine.model';

const BASE_URL = "http://localhost:5000/api";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuizQuestions(): Observable<QuizQuestionList> {
    return this.http.get<QuizQuestionList>(BASE_URL + "/quiz/questions").pipe(map(data => {
      return new QuizQuestionList(data);
    }));
  }

  getQuizResults(quizAnswers: any): Observable<QuizResults> {
    return this.http.post<QuizResults>(BASE_URL + "/varieties/match", quizAnswers).pipe(map(data => {
      return new QuizResults(data);
    }));
  }

  getRandomResult(): Observable<Wine> {
    return this.http.get<Wine>(BASE_URL + "varieties/random").pipe(map(data => {
      return new Wine(data);
    }));
  }
}
