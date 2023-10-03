import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/wine.model';
import { WineService } from '../wine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wine-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.scss']
})
export class WineDetailsComponent {
  wine: Wine | undefined;

  constructor(private wineService: WineService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('id')) {
        let id: string = String(params.get('id'));
        this.wineService.getWineById(id).subscribe(data => {
          this.wine = new Wine(data);
        })
      }
    })
  }
}
