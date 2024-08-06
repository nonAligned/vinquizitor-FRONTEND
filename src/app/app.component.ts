import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wine-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'vinquizitor';
  isInfoBoxVisible: boolean = true;
  closeButton = faX;

  constructor(private contexts: ChildrenOutletContexts) { }

  onRouterActivate(): void {
    document.getElementById("router")?.scrollIntoView();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit() {
    if (window.sessionStorage.getItem("alreadyVisited")) {
      this.isInfoBoxVisible = false;
    }
  }

  closeInfoBox() {
    this.isInfoBoxVisible = false;
    window.sessionStorage.setItem("alreadyVisited", "true");
  }
}
