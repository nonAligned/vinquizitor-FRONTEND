import { Component, Input } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wine-wine-glass',
  templateUrl: './wine-glass.component.html',
  styleUrls: ['./wine-glass.component.scss']
})
export class WineGlassComponent {
  @Input() activeGlass: string = "";
  isModalActive: boolean = false;
  exitButton = faX;
  glassType: string = "";
  
  openCloseModal(glassType?: string): void {
    
    if(glassType) {
      if (this.activeGlass === glassType) {
        this.glassType = glassType;
        this.isModalActive = true;
      }
    } else {
      this.glassType = "";
      this.isModalActive = false;
    }
    
    // this.isModalActive = !this.isModalActive;
  }
}
