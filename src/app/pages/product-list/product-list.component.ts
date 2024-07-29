import { Component, OnInit } from '@angular/core';
import productsData from '../../../../public/assest/data/product-data.json';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = productsData;
  filteredProducts = productsData;
  searchQuery: string = '';
  selectedCategory: string = 'all-products';
  sortOption: string = 'reviews';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'] || 'all-products';
      this.filterProducts();
    });
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
    this.filterProducts();
  }

  onSortOptionChange(option: string) {
    this.sortOption = option;
    this.filterProducts();
  }

  onCategoryChange(categoryId: number) {
    const categories = [
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

    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      this.router.navigate([`/products/${category.path}`]);
    }
  }

  filterProducts() {
    let filtered = this.products;

    if (this.selectedCategory !== 'all-products') {
      filtered = filtered.filter(product => product.category_id === this.getCategoryId(this.selectedCategory));
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

  getCategoryId(categoryPath: string): number {
    const categories = [
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

    const category = categories.find(cat => cat.path === categoryPath);
    return category ? category.id : 0;
  }


  selectedTab = 0;

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

}
