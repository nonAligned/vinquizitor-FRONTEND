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
  page = 0;
  isLoadMoreVisible = true;

  constructor(private wineService: WineService) { }

  ngOnChanges() {
    this.page = 0
    
    this.searchNotifier.next({
      "filter":this.filter,
      "searchString":this.searchString,
      "sort":this.sort,
      "page":this.page
    });
  }

  ngOnInit() {
    this.getInitialWines();
    this.searchNotifier.pipe(debounceTime(500), distinctUntilChanged((prev: any, curr: any) => prev.filter === curr.filter && prev.searchString === curr.searchString && prev.sort === curr.sort))
      .subscribe(data => {
        this.getInitialWines()
      });
  }

  getInitialWines() {
    let params = {
      "filter": this.filter || "",
      "searchString": this.searchString || "",
      "sort": this.sort || "",
      "page": this.page
    }

    this.wineService.getAllWines(params)
      .pipe(takeUntil(this.searchNotifier))
      .subscribe(res => {
       let newWineList: WineList = new WineList(res);
       this.wines = newWineList;
       if (this.wines.itemsFound < 10) {
         this.isLoadMoreVisible = false;
       } else {
        this.isLoadMoreVisible = true;
       }
      });
  }

  getNextWines() {
    let params = {
      "filter": this.filter || "",
      "searchString": this.searchString || "",
      "sort": this.sort || "",
      "page": this.page || 1
    }

    this.wineService.getAllWines(params)
      .pipe(takeUntil(this.searchNotifier))
      .subscribe(res => {
       let newWineList: WineList = new WineList(res);
       if(newWineList.itemsFound !== 0) {
         for (let wine of newWineList.results) {
           this.wines.results.push(wine);
         }
         if (newWineList.itemsFound < 10) {
          this.isLoadMoreVisible = false;
         }
       } else {
        this.isLoadMoreVisible = false;
        console.log(newWineList.itemsFound)
       }
      });
  }

  ngOnDestroy() {
    this.searchNotifier.complete();
  }

  loadMore() {
    this.page++
    this.getNextWines();
  }
}
