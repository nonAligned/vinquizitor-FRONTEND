import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { WineList } from 'src/app/models/wine-list.model';
import { WineService } from '../wine.service';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  selector: 'wine-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit, OnChanges {
  @Input() filter: string | undefined;
  @Input() searchString: string | undefined;
  @Input() sort: string | undefined;
  wines: WineList = new WineList();
  searchNotifier = new Subject();

  constructor(private wineService: WineService) { }

  ngOnChanges() {
    this.searchNotifier.next({
      "filter":this.filter,
      "searchString":this.searchString,
      "sort":this.sort
    });
  }

  ngOnInit() {
    this.getAllWines();
    this.searchNotifier.pipe(debounceTime(500), distinctUntilChanged((prev: any, curr: any) => prev.filter === curr.filter && prev.searchString === curr.searchString && prev.sort === curr.sort))
      .subscribe(data => {
        this.getAllWines()
      });
  }

  getAllWines() {
    let params = {
      "filter": this.filter || "",
      "searchString": this.searchString || "",
      "sort": this.sort || ""
    }

    this.wineService.getAllWines(params)
      .pipe(takeUntil(this.searchNotifier))
      .subscribe(res => {
       let newWineList: WineList = new WineList(res);
       this.wines = newWineList;
      });
  }

  ngOnDestroy() {
    this.searchNotifier.complete();
  }
}
