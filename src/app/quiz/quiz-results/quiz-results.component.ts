import { Component, Input } from '@angular/core';
import { QuizResults } from 'src/app/models/quiz-results.model';

@Component({
  selector: 'wine-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent {
  @Input() quizResults?: QuizResults;

}
