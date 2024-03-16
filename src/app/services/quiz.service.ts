import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuizQuestionList } from '../models/quiz-question-list.model';
import { QuizResults } from '../models/quiz-results.model';
import { Wine } from '../models/wine.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuizQuestions(): Observable<QuizQuestionList> {
    return this.http.get<QuizQuestionList>(environment.apiKey + "/quiz/questions").pipe(map(data => {
      return new QuizQuestionList(data);
    }));
  }

  getQuizResults(quizAnswers: any): Observable<QuizResults> {
    return this.http.post<QuizResults>(environment.apiKey + "/varieties/match", quizAnswers).pipe(map(data => {
      return new QuizResults(data);
    }));
  }

  getRandomResult(): Observable<Wine> {
    return this.http.get<Wine>(environment.apiKey + "/varieties/random").pipe(map(data => {
      return new Wine(data);
    }));
  }
}
