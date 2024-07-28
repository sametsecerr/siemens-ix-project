import { Component, OnInit } from '@angular/core';
import productsData from '../../../../public/assest/data/product-data.json';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = productsData;
  filteredProducts = productsData;
  searchQuery: string = '';
  selectedCategory: number = 0;
  sortOption: string = 'reviews';

  ngOnInit(): void {
    this.filterProducts();
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
    this.filterProducts();
  }

  onCategoryChange(categoryId: number) {
    this.selectedCategory = categoryId;
    this.filterProducts();
  }

  onSortOptionChange(option: string) {
    this.sortOption = option;
    this.filterProducts();
  }

  filterProducts() {
    let filtered = this.products;

    if (this.selectedCategory !== 0) {
      filtered = filtered.filter(product => product.category_id === this.selectedCategory);
    }

    if (this.searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    switch (this.sortOption) {
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'lowPrice':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'highPrice':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    this.filteredProducts = filtered;
  }
}
