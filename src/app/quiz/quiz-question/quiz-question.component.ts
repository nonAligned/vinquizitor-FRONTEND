import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizQuestion } from 'src/app/models/quiz-question.model';
import { UserAnswer } from 'src/app/models/user-answer.model';

@Component({
  selector: 'wine-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  @Input() quizQuestion?: QuizQuestion;
  @Input() selectedAnswer?: number;
  @Input() questionNumber?: number;
  @Output() navigate: EventEmitter<any> = new EventEmitter();
  @Output() changeValue: EventEmitter<any> = new EventEmitter();
  userAnswer?: string;

  ngOnInit() {
    if(this.quizQuestion?.type === 'choice') {
      this.userAnswer = "-1";
    } else this.userAnswer = "2";

    if (this.selectedAnswer !== -1) {
      this.userAnswer = String(this.selectedAnswer);
    }
  }

  onNavigate(direction: string) {
    this.navigate.emit(direction);
  }

  onValueChange() {
    let userAnswer: UserAnswer = new UserAnswer({
      questionId: this.quizQuestion?._id,
      questionNumber: this.questionNumber,
      selectedAnswer: Number(this.userAnswer),
      property: this.quizQuestion?.property
    });
    this.changeValue.emit(userAnswer);
  }
}
