import { Component, Input } from '@angular/core';
import { Wine } from 'src/app/models/wine.model';

@Component({
  selector: 'wine-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent {
  @Input() wine: Wine | undefined;
}
