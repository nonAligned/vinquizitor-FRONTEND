import { Component, OnInit } from '@angular/core';
import { WineList } from 'src/app/models/wine-list.model';
import { WineService } from '../wine.service';

@Component({
  selector: 'wine-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent {
  wines: WineList = new WineList();

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.getAllWines();
  }

  getAllWines() {
    this.wineService.getAllWines().subscribe(res => {
      let newWineList: WineList = new WineList(res);
      this.wines = newWineList;
    });
  }
}
