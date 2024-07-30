import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import productsData from '../../../../public/assest/data/product-data.json';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { ModalService } from '@siemens/ix-angular';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild('customModal', { read: TemplateRef }) customModalRef!: TemplateRef<any>;

  products = productsData;
  filteredProducts = productsData;
  searchQuery: string = '';
  selectedCategory: string = 'all-products';
  sortOption: string = 'reviews';
  selectedTab: number = 0;
  quickFilterText: string = '';
  isFavorite: boolean = false;
  selectedProduct: any;

  columnDefs: ColDef[] = [
    { headerName: 'Product ID', field: 'product_id', sortable: true, filter: true },
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      cellRenderer: (params: ICellRendererParams) => {
        const imgUrl = params.data.photo;
        const name = params.value;
        return `<div style="display: flex; align-items: center;">
                  <img src="${imgUrl}" style="width: 40px;min-width:40px;max-width:40px;min-height:40px;max-height:40px;object-fit:cover; height: 40px; margin-right: 8px;" />
                  <span>${name}</span>
                </div>`;
      }
    },
    { headerName: 'Category', field: 'category', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: 'agNumberColumnFilter' },
    { headerName: 'Description', field: 'description', sortable: true, filter: true },
    { headerName: 'In Stock', field: 'in_stock', sortable: true, filter: true },
    { headerName: 'Rating', field: 'rating', sortable: true, filter: 'agNumberColumnFilter' },
    { headerName: 'Reviews', field: 'reviews', sortable: true, filter: 'agNumberColumnFilter' },
    { headerName: 'Discount', field: 'discount', sortable: true, filter: 'agNumberColumnFilter' },
  ];

  rowData = this.products;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private cookieService: CookieService
  ) {}ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params['category'] || 'all-products';
      this.selectedCategory = category;
      this.filterProducts();
    });

    this.route.url.subscribe(url => {
      const path = url[1]?.path;
      this.selectedTab = path === 'grid' ? 0 : 1;
    });
  }

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
    const category = this.selectedCategory || 'all-products';
    const path = tabIndex === 0 ? 'grid' : 'aggrid';
    this.router.navigate([`/products/${path}/${category}`]);
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
    if (this.selectedTab !== 0) {
      return;
    }

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
      const path = this.selectedTab === 0 ? 'grid' : 'aggrid';
      this.router.navigate([`/products/${path}/${category.path}`]);
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

  onQuickFilterChanged(filterText: string) {
    this.quickFilterText = filterText;
  }
  async onRowClicked(event: any) {
    const product = event.data;
    this.selectedProduct = product;
    this.isFavorite = this.checkIfFavorite(product);

    const instance = await this.modalService.open({
      content: this.customModalRef,
      data: { isFavorite: this.isFavorite, product }
    });

    instance.onClose.on((action) => {
      if (action === 'view') {
        this.viewProduct(product.product_id);
      } else if (action === 'favorite') {
        this.toggleFavorite();
      } else if (action === 'review') {
        this.openReviewModal();
      }
    });
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    let favoriteProducts = this.getFavoriteProducts();

    if (this.isFavorite) {
      favoriteProducts.push(this.selectedProduct);
      console.log('Product added to favorites:', this.selectedProduct);
    } else {
      favoriteProducts = favoriteProducts.filter((p: any) => p.product_id !== this.selectedProduct.product_id);
      console.log('Product removed from favorites:', this.selectedProduct);
    }

    this.cookieService.set('favorite_products', JSON.stringify(favoriteProducts));
  }

  checkIfFavorite(product: any): boolean {
    const favoriteProducts = this.getFavoriteProducts();
    return favoriteProducts.some((p: any) => p.product_id === product.product_id);
  }

  getFavoriteProducts(): any[] {
    const favoriteProducts = this.cookieService.get('favorite_products');
    return favoriteProducts ? JSON.parse(favoriteProducts) : [];
  }

        viewProduct(productId: string) {
          this.router.navigate(['/product-detail'], { queryParams: { productId } });
        }

        @ViewChild('reviewModal', { read: TemplateRef }) reviewModalRef!: TemplateRef<any>;

        async openReviewModal() {
          const instance = await this.modalService.open({
            content: this.reviewModalRef,
            data: this.selectedProduct,
            size: '840'
          });

          instance.onClose.on(() => {
          });
        }

        }
