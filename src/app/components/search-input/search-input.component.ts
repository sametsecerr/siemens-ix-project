// search-input.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  template: `
    <form class="needs-validation m-2">
      <ix-input-group>
        <span slot="input-start">
          <ix-icon name="search" size="16"></ix-icon>
        </span>
        <input
          [(ngModel)]="customSearch"
          name="input"
          (keyup)="onKey($event)"
          id="input-string"
          type="string"
        />
        <span slot="input-end">
          <ix-icon-button
            (click)="clearInput()"
            id="clear-button"
            icon="clear"
            ghost="{true}"
            size="16"
            [style.display]="display"
          ></ix-icon-button>
        </span>
      </ix-input-group>
    </form>
  `,
})
export class SearchInputComponent {
  customSearch = '';
  display = 'none';

  @Output() searchChanged = new EventEmitter<string>();

  clearInput() {
    this.customSearch = '';
    this.display = 'none';
    this.searchChanged.emit(this.customSearch);
  }

  onKey(event: any) {
    this.customSearch = event.target.value;
    this.searchChanged.emit(this.customSearch);
    this.display = this.customSearch === '' ? 'none' : 'block';
  }
}
