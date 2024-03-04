import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'wine-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  buttonLeft = faChevronCircleLeft;
  buttonRight = faChevronCircleRight;
  activeOption: string = "quiz";
  options: Array<string> = ["quiz", "search", "random"];

  constructor(private quizService: QuizService, private router: Router) {}

  navigate(direction: string) {
    let activeOptionIndex = this.options.indexOf(this.activeOption);
    if (direction === "left") {
      if (activeOptionIndex === 0) {
        this.activeOption = this.options[this.options.length-1];
      } else {
        this.activeOption = this.options[activeOptionIndex-1];
      }
    } else if (direction === "right") {
      if (activeOptionIndex === this.options.length-1) {
        this.activeOption = this.options[0];
      } else {
        this.activeOption = this.options[activeOptionIndex+1];
      }
    }
  }

  getRandom() {
    this.quizService.getRandomResult().subscribe(randomResult => {
      this.router.navigateByUrl(`/search/${randomResult._id}`, {skipLocationChange: true});
    });
  }
}
