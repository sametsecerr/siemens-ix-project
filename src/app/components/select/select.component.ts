import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <ix-select (valueChange)="onValueChange($event.detail)" [value]="value">
      <ix-select-item label="Değerlendirme Sayısı" value="reviews"></ix-select-item>
      <ix-select-item label="Düşük Fiyat" value="lowPrice"></ix-select-item>
      <ix-select-item label="Yüksek Fiyat" value="highPrice"></ix-select-item>
      <ix-select-item label="Ürün Puanı" value="rating"></ix-select-item>
    </ix-select>
  `,
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
