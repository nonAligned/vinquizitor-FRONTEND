import { Component, Input, OnInit } from '@angular/core';
import { WineService } from '../../wine.service';
import { Glass } from 'src/app/models/glass.model';

@Component({
  selector: 'wine-wine-glass',
  templateUrl: './wine-glass.component.html',
  styleUrls: ['./wine-glass.component.scss']
})
export class WineGlassComponent implements OnInit {
  @Input() activeGlass?: string;
  glass?: Glass;
  isModalActive: boolean = false;

  constructor(private wineService: WineService) { }

  ngOnInit(): void {
    this.wineService.getGlassByType(this.activeGlass!).subscribe(data => {
      this.glass = data;
    });
  }
  
  openCloseModal(action: string, type?: string): void {
    if (action === "open") {
      console.log(this.activeGlass, type)
      if (type && (type === this.activeGlass || type === "universal")) {
        this.isModalActive = true;
      }
    } else if (action === "close") {
      this.isModalActive = false
    }
  }
}
