import { Component } from '@angular/core';

@Component({
  selector: 'wine-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  activeOption: string = "quiz";
  options: Array<string> = ["quiz", "search", "random"];

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
}
