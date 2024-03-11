import { Component } from '@angular/core';

@Component({
  selector: 'wine-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vinquizitor';

  onRouterActivate(): void {
    document.getElementById("router")?.scrollIntoView();
  }
}
