import { Component, Input } from '@angular/core';
import { QuizQuestion } from 'src/app/models/quiz-question.model';
import { UserAnswer } from 'src/app/models/user-answer.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'wine-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent {
  @Input() quizQuestions?: QuizQuestion[]
  currentQuestion: number = 1;
  currentAnswer?: UserAnswer;
  userAnswers: UserAnswer[] = [];

  constructor(private quizService: QuizService) { }

  navigate(direction: string) {
    if (direction === "next") {
      this.currentQuestion++;
      this.currentAnswer = this.userAnswers[this.currentQuestion-1];
    } else {
      this.currentQuestion--;
      this.currentAnswer = this.userAnswers[this.currentQuestion-1];
    }
  }

  onValueChange(newUserAnswer: UserAnswer) {
    let isAnswered: boolean = false;
    for (let i=0; i<this.userAnswers.length; i++) {
      if (this.userAnswers[i].questionId === newUserAnswer.questionId) {
        this.userAnswers[i].selectedAnswer = newUserAnswer.selectedAnswer;
        isAnswered = true;
      }
    }
    if (!isAnswered) {
      this.userAnswers.push(newUserAnswer);
    }
  }

  onComplete() {
    let acidityAnswers: Array<number> = [];
    let alcoholAnswers: Array<number> = [];
    let sweetnessAnswers: Array<number> = [];
    let bodyAnswers: Array<number> = [];
    let tanninAnswers: Array<number> = [];

    for (let answer of this.userAnswers) {
      switch (answer.property) {
        case "acidity":
          acidityAnswers.push(answer.selectedAnswer);
          break;
        case "alcohol":
          alcoholAnswers.push(answer.selectedAnswer);
          break;
        case "sweetness":
          sweetnessAnswers.push(answer.selectedAnswer);
          break;
        case "body":
          bodyAnswers.push(answer.selectedAnswer);
          break;
        case "tannin":
          tanninAnswers.push(answer.selectedAnswer);
          break;
      }
    }

    let quizAnswers = {
      "acidity": this.calculateAverage(acidityAnswers),
      "alcohol": this.calculateAverage(alcoholAnswers),
      "sweetness": this.calculateAverage(sweetnessAnswers),
      "body": this.calculateAverage(bodyAnswers),
      "tannin": this.calculateAverage(tanninAnswers)
    }

    this.quizService.getQuizResults(quizAnswers).subscribe(res => {
      console.log(res);
    })
    
  }

  calculateAverage(array: Array<number>): number {
    let sum: number = 0;
    for (let i=0; i<array.length; i++) {
      sum += array[i];
    }

    return sum/array.length;
  }


}
