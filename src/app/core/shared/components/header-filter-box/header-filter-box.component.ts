import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-filter-box',
  templateUrl: './header-filter-box.component.html',
  styleUrls: ['./header-filter-box.component.scss']
})
export class HeaderFilterBoxComponent {
  @Output() filterText = new EventEmitter<string>();
  searchText: string = '';
  constructor() {}

  sendSearchText(event: any) {
    this.searchText = event.target.value;
    this.filterText.emit(this.searchText);
  }
}
