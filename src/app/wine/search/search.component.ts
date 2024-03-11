import { Component, OnInit } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'wine-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filter: string = "";
  searchString: string = "";
  sort: string = "";
  exitButton = faX;

  ngOnInit(): void {
    if (sessionStorage.getItem("query")) {
      this.searchString = sessionStorage.getItem("query")!;
    }
  }

  updateFilter(newFilter: string) {
    this.filter = newFilter;
  }

  updateSort(newSort: any) {
    this.sort = newSort
  }

  changeQuery(): void {
    sessionStorage.setItem("query", this.searchString);
  }

  resetQuery(): void {
    this.searchString = "";
    sessionStorage.removeItem("query");
  }

}
