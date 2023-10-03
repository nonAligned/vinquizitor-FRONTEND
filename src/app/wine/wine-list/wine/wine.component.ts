import { Component, Input, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Wine } from 'src/app/models/wine.model';

@Component({
  selector: 'wine-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent {
  @Input() wine: Wine | undefined;

  arrow = faChevronRight;
  styleBackgroundColor: string = "";

  ngOnInit() {
    this.styleBackgroundColor = this.getBackgroundColor();
  }

  getBackgroundColor(): string {
    let lightRed: string = "#F39D9D";
    let mediumRed: string = "#A62946";
    let fullRed: string = "#70162F";
    let rose: string = "#F3B9A8";
    let lightWhite: string = "#E9DA94";
    let fullWhite: string = "#FAD181";
    let sweetWhite: string = "#FBE984";
    let sparkling: string = "#D7CDA0";
    let dessert: string = "#B37642";

    let backgroundColor: string = "";

    if (this.wine?.styles && this.wine.styles.length == 1) {
  
      if (this.wine?.styles && this.wine?.styles.includes("light_red")) {
        backgroundColor += lightRed;
      }
      if (this.wine?.styles && this.wine?.styles.includes("medium_red")) {
        backgroundColor += mediumRed;
      }
      if (this.wine?.styles && this.wine?.styles.includes("full_red")) {
        backgroundColor += fullRed;
      }
      if (this.wine?.styles && this.wine?.styles.includes("rosé")) {
        backgroundColor += rose;
      }
      if (this.wine?.styles && this.wine?.styles.includes("light_white")) {
        backgroundColor += lightWhite;
      }
      if (this.wine?.styles && this.wine?.styles.includes("full_white")) {
        backgroundColor += fullWhite;
      }
      if (this.wine?.styles && this.wine?.styles.includes("sweet_white")) {
        backgroundColor += sweetWhite;
      }
      if (this.wine?.styles && this.wine?.styles.includes("sweet_white")) {
        backgroundColor += sweetWhite;
      }
      if (this.wine?.styles && this.wine?.styles.includes("sparkling")) {
        backgroundColor += sparkling;
      }
      if (this.wine?.styles && this.wine?.styles.includes("dessert")) {
        backgroundColor += dessert;
      }
      

    } else if (this.wine?.styles && this.wine.styles.length > 1) {

      backgroundColor = "linear-gradient(0deg,";
  
      if (this.wine?.styles && this.wine?.styles.includes("light_red")) {
        backgroundColor += lightRed;
        backgroundColor += ",";
      }
      if (this.wine?.styles && this.wine?.styles.includes("medium_red")) {
        backgroundColor += mediumRed;
        backgroundColor += ",";
      }
      if (this.wine?.styles && this.wine?.styles.includes("full_red")) {
        backgroundColor += fullRed;
        backgroundColor += ",";
      }
      if (this.wine?.styles && this.wine?.styles.includes("rosé")) {
        backgroundColor += rose;
        backgroundColor += ",";
      }
      if (this.wine?.styles && this.wine?.styles.includes("light_white")) {
        backgroundColor += lightWhite;
        backgroundColor += ",";
      }
      if (this.wine?.styles && this.wine?.styles.includes("full_white")) {
        backgroundColor += fullWhite;
        backgroundColor += ",";
      }
      if (this.wine?.styles && this.wine?.styles.includes("sweet_white")) {
        backgroundColor += sweetWhite;
        backgroundColor += ",";
      }
      if (this.wine?.styles && this.wine?.styles.includes("sweet_white")) {
        backgroundColor += sweetWhite;
        backgroundColor += ",";
      }
      if (this.wine?.styles && this.wine?.styles.includes("sparkling")) {
        backgroundColor += sparkling;
        backgroundColor += ",";
      }
      if (this.wine?.styles && this.wine?.styles.includes("dessert")) {
        backgroundColor += dessert;
        backgroundColor += ",";
      }
  
      backgroundColor = backgroundColor.substring(0, backgroundColor.length-1) + ")";
    }
    return backgroundColor;
  }
}
