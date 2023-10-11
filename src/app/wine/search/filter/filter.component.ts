import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wine-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() activeOption: string = "";
  @Output() activeOptionChange = new EventEmitter();

  changeFilterOption(newOption: string) {
    this.activeOption = newOption;
    this.activeOptionChange.emit(this.activeOption);
  }

}
