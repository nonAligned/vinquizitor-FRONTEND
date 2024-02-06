import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuizQuestionList } from '../models/quiz-question-list.model';

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
}
