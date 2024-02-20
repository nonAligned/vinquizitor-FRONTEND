import { Component, Input } from '@angular/core';
import { QuizQuestion } from 'src/app/models/quiz-question.model';
import { UserAnswer } from 'src/app/models/user-answer.model';

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
    console.log(newUserAnswer)
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
}
