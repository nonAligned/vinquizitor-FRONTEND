import { Component, EventEmitter, Output } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wine-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  sort = "_id:1";
  @Output() sortChange = new EventEmitter();

  changeSort() {
    this.sortChange.emit(this.sort);
  }

}
