import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <ix-expanding-search class=" cursor-pointer" (input)="onSearch($event)" placeholder="Search..."></ix-expanding-search>
  `,
})
export class SearchComponent {
  @Output() searchChanged = new EventEmitter<string>();

  onSearch(event: any) {
    this.searchChanged.emit(event.target.value);
  }
}
