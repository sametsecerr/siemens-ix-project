import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories = [
    { id: 0, name: 'All Products', path: 'all-products' },
    { id: 1, name: 'Electronics', path: 'electronics' },
    { id: 2, name: 'Home & Kitchen', path: 'home-kitchen' },
    { id: 3, name: 'Sports & Outdoors', path: 'sports-outdoors' },
    { id: 4, name: 'Office Supplies', path: 'office-supplies' },
    { id: 5, name: 'Health & Personal Care', path: 'health-personal-care' },
    { id: 6, name: 'Accessories', path: 'accessories' },
    { id: 7, name: 'Luggage & Travel', path: 'luggage-travel' },
    { id: 8, name: 'Home Automation', path: 'home-automation' },
    { id: 9, name: 'Office Furniture', path: 'office-furniture' },
    { id: 10, name: 'Furniture', path: 'furniture' },
    { id: 11, name: 'Sportswear', path: 'sportswear' },
    { id: 12, name: 'Home Appliances', path: 'home-appliances' },
    { id: 13, name: 'Fitness', path: 'fitness' },
    { id: 14, name: 'Kitchen Appliances', path: 'kitchen-appliances' },
    { id: 15, name: 'Home Improvement', path: 'home-improvement' },
    { id: 16, name: 'Sports Equipment', path: 'sports-equipment' },
    { id: 17, name: 'Photography', path: 'photography' },
    { id: 18, name: 'Musical Instruments', path: 'musical-instruments' },
    { id: 19, name: 'Outdoor Gear', path: 'outdoor-gear' },
    { id: 20, name: 'Wearable Technology', path: 'wearable-technology' },
    { id: 21, name: 'Outdoor Recreation', path: 'outdoor-recreation' }
  ];

  @Output() categorySelected = new EventEmitter<number>();
  selectedCategoryId: number = 0;

  constructor(private router: Router) {}

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    const category = this.categories.find(cat => cat.id === categoryId);
    if (category) {
      this.router.navigate([`/products/${category.path}`]);
    }
    this.categorySelected.emit(categoryId);
  }
}
