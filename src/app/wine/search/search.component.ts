import { Component } from '@angular/core';

@Component({
  selector: 'wine-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  filter: string = "";
  searchString: string = "";
  sort: string = "";

  updateFilter(newFilter: string) {
    this.filter = newFilter;
  }

  updateSort(newSort: any) {
    this.sort = newSort
  }

}
