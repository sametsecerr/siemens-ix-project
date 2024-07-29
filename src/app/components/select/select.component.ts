import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: "select.component.html",
})
export class SelectComponent {
  @Output() sortOptionChanged = new EventEmitter<string>();
  value = 'reviews';

  onValueChange(value: string | string[]) {
    if (Array.isArray(value)) {
      this.sortOptionChanged.emit(value[0]);
    } else {
      this.sortOptionChanged.emit(value);
    }
  }
}
