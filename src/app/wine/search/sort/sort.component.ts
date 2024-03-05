import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wine-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  sort = "_id:1";
  @Output() sortChange = new EventEmitter();

  ngOnInit(): void {
    if (sessionStorage.getItem("sort")) {
      this.sort = sessionStorage.getItem("sort")!;
    }
  }

  changeSort() {
    sessionStorage.setItem("sort", this.sort);
    this.sortChange.emit(this.sort);
  }

}
