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
  swipeCoord?: [number, number];
  swipeTime?: number;

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

  swipe(event: TouchEvent, when: string): void {
    const coord: [number, number] = [event.changedTouches[0].clientX, event.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === "start") {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === "end") {
      const direction = [coord[0] - this.swipeCoord![0], coord[1] - this.swipeCoord![1]];
      const duration = time - this.swipeTime!;

      if (duration < 1000 && Math.abs(direction[0]) > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
        const swipe = direction[0] < 0 ? "right" : "left";
        this.navigate(swipe);
      }
    }
  }
}
