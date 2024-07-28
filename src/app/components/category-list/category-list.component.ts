import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories = [
    { id: 0, name: 'All Products' },
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Home & Kitchen' },
    { id: 3, name: 'Sports & Outdoors' },
    { id: 4, name: 'Office Supplies' },
    { id: 5, name: 'Health & Personal Care' },
    { id: 6, name: 'Accessories' },
    { id: 7, name: 'Luggage & Travel' },
    { id: 8, name: 'Home Automation' },
    { id: 9, name: 'Office Furniture' },
    { id: 10, name: 'Furniture' },
    { id: 11, name: 'Sportswear' },
    { id: 12, name: 'Home Appliances' },
    { id: 13, name: 'Fitness' },
    { id: 14, name: 'Kitchen Appliances' },
    { id: 15, name: 'Home Improvement' },
    { id: 16, name: 'Sports Equipment' },
    { id: 17, name: 'Photography' },
    { id: 18, name: 'Musical Instruments' },
    { id: 19, name: 'Outdoor Gear' },
    { id: 20, name: 'Wearable Technology' },
    { id: 21, name: 'Outdoor Recreation' }
  ];

  @Output() categorySelected = new EventEmitter<number>();

  selectCategory(categoryId: number) {
    this.categorySelected.emit(categoryId);
  }
}
