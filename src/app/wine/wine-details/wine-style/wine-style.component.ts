import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wine-wine-style',
  templateUrl: './wine-style.component.html',
  styleUrls: ['./wine-style.component.scss']
})
export class WineStyleComponent {
  @Input() wineStyles: string[] | undefined;
  allStyles = ["light_red", "medium_red", "full_red", "rosé","light_white", "full_white", "sweet_white", "sparkling", "dessert"];

  ngOnInit(): void {
    
  }

}
