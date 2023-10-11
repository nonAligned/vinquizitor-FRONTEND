import { Component } from '@angular/core';

@Component({
  selector: 'wine-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  filter: string = "";
  searchString: string = "";

  updateFilter(newFilter: string) {
    this.filter = newFilter;
  }

}
