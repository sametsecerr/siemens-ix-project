import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.css']
})
export class DetailHeaderComponent {
  @Input() headerTitle: string = '';

  @Output() backButtonClick = new EventEmitter<void>();

  onBackButtonClick() {
    this.backButtonClick.emit();
  }
}
