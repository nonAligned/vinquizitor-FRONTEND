import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from 'src/app/models/quiz-question.model';
import { QuizResult } from 'src/app/models/quiz-result.model';
import { QuizResults } from 'src/app/models/quiz-results.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'wine-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizQuestions: QuizQuestion[] = [];
  isQuizStarted: boolean = false;
  isQuizFinished: boolean = false;
  quizResults?: QuizResults;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void  {
    if (sessionStorage.getItem("quizFinished")) {
      let sessionStorageResults = []

      let result1 = new QuizResult({
        varietyName: sessionStorage.getItem("var1Name"),
        varietyId: sessionStorage.getItem("var1Id"),
        matchPercentage: Number(sessionStorage.getItem("var1Match")),
        type: sessionStorage.getItem("var1Type"),
      });
      let result2 = new QuizResult({
        varietyName: sessionStorage.getItem("var2Name"),
        varietyId: sessionStorage.getItem("var2Id"),
        matchPercentage: Number(sessionStorage.getItem("var2Match")),
        type: sessionStorage.getItem("var2Type"),
      });
      let result3 = new QuizResult({
        varietyName: sessionStorage.getItem("var3Name"),
        varietyId: sessionStorage.getItem("var3Id"),
        matchPercentage: Number(sessionStorage.getItem("var3Match")),
        type: sessionStorage.getItem("var3Type"),
      });

      sessionStorageResults.push(result1, result2, result3);

      this.quizResults = new QuizResults({results: sessionStorageResults});

      this.isQuizStarted = true;
      this.isQuizFinished = true;

    } else {
      this.getQuizQuestions();
    }
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

  finishQuiz(newQuizResults: QuizResults): void {
    this.quizResults = newQuizResults;
    sessionStorage.setItem("quizFinished","true");

    sessionStorage.setItem("var1Name", this.quizResults.results[0].varietyName);
    sessionStorage.setItem("var1Id", this.quizResults.results[0].varietyId);
    sessionStorage.setItem("var1Match", String(this.quizResults.results[0].matchPercentage));
    sessionStorage.setItem("var1Type", this.quizResults.results[0].type);

    sessionStorage.setItem("var2Name", this.quizResults.results[1].varietyName);
    sessionStorage.setItem("var2Id", this.quizResults.results[1].varietyId);
    sessionStorage.setItem("var2Match", String(this.quizResults.results[1].matchPercentage));
    sessionStorage.setItem("var2Type", this.quizResults.results[1].type);

    sessionStorage.setItem("var3Name", this.quizResults.results[2].varietyName);
    sessionStorage.setItem("var3Id", this.quizResults.results[2].varietyId);
    sessionStorage.setItem("var3Match", String(this.quizResults.results[2].matchPercentage));
    sessionStorage.setItem("var3Type", this.quizResults.results[2].type);
  
    this.isQuizFinished = true;
  }

  resetQuiz(): void {
    sessionStorage.clear();
    this.isQuizStarted = false;
    this.isQuizFinished = false;
    this.getQuizQuestions();
  }
}
