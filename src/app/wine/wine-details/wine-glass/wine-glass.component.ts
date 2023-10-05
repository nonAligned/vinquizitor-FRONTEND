import { Component, Input } from '@angular/core';

@Component({
  selector: 'wine-wine-glass',
  templateUrl: './wine-glass.component.html',
  styleUrls: ['./wine-glass.component.scss']
})
export class WineGlassComponent {
  @Input() activeGlass: string = "";

  

}
