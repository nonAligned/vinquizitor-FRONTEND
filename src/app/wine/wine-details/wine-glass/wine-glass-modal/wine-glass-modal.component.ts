import { Component, Input } from '@angular/core';

@Component({
  selector: 'wine-wine-glass-modal',
  templateUrl: './wine-glass-modal.component.html',
  styleUrls: ['./wine-glass-modal.component.scss']
})
export class WineGlassModalComponent {
  @Input() glassType: string = "";

  

}
