import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wine-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() activeOption: string = "";
  @Output() activeOptionChange = new EventEmitter();

  ngOnInit(): void {
    if (sessionStorage.getItem("filter")) {
      this.activeOption = sessionStorage.getItem("filter")!;
    }
  }

  changeFilterOption(newOption: string) {
    this.activeOption = newOption;
    sessionStorage.setItem("filter", newOption);
    this.activeOptionChange.emit(this.activeOption);
  }

}
