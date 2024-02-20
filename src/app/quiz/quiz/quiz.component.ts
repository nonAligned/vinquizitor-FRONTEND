import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from 'src/app/models/quiz-question.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'wine-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizQuestions: QuizQuestion[] = [];
  isQuizStarted: boolean = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void  {
    this.getQuizQuestions();
  }

  getQuizQuestions(): void {
    this.quizService.getQuizQuestions().subscribe(quizQuestions => {
      for(let quizQuestion of quizQuestions.results) {
        this.quizQuestions.push(quizQuestion);
      }
    });
  }

  startQuiz(): void {
    this.isQuizStarted = true;
  }
}
