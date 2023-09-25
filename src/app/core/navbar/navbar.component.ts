import { Component } from '@angular/core';
import { faArrowRight, faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wine-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarCollapsed: boolean = true;
  navbarCollapseButton = faBars;

  collapseNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed
  }
}
