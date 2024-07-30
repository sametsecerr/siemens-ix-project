import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import productsData from '../../../../public/assest/data/product-data.json';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  isFavorite: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const productId = params['productId'];
      if (!productId) {
        this.router.navigate(['/products/grid/all-products']);
        return;
      }

      this.product = productsData.find(p => p.product_id === productId);
      if (!this.product) {
        this.router.navigate(['/products/grid/all-products']);
      } else {
        this.checkIfFavorite();
      }
    });
  }

  onBackButtonClick() {
    this.router.navigate(['/products/grid/all-products']);
  }

  getDiscountedPrice(): string {
    return `$${(this.product.price - (this.product.price * this.product.discount / 100)).toFixed(2)}`;
  }

  getStarArray(rating: number) {
    const fullStars = Math.floor(rating);
    const fractionalStar = rating - fullStars;
    return { fullStars, fractionalStar };
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    let favoriteProducts = this.getFavoriteProducts();

    if (this.isFavorite) {
      favoriteProducts.push(this.product);
      // alert('Product added to favorites.');
    } else {
      favoriteProducts = favoriteProducts.filter((p: any) => p.product_id !== this.product.product_id);
      // alert('Product removed from favorites.');
    }

    this.cookieService.set('favorite_products', JSON.stringify(favoriteProducts));
  }

  getFavoriteProducts(): any[] {
    const favorites = this.cookieService.get('favorite_products');
    return favorites ? JSON.parse(favorites) : [];
  }

  checkIfFavorite() {
    const favoriteProducts = this.getFavoriteProducts();
    this.isFavorite = favoriteProducts.some((p: any) => p.product_id === this.product.product_id);
  }
}
