import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnChanges {
  @Input() product: any;
  isFavorite: boolean = false;

  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      this.checkIfFavorite();
    }
  }

  getStarArray(rating: number) {
    const fullStars = Math.floor(rating);
    const fractionalStar = rating - fullStars;
    return { fullStars, fractionalStar };
  }

  getDiscountedPrice(): string {
    return `$${(this.product.price - (this.product.price * this.product.discount / 100)).toFixed(2)}`;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    let favoriteProducts = this.getFavoriteProducts();

    if (this.isFavorite) {
      favoriteProducts.push(this.product);
      //alert('Product added to favorites.');
    } else {
      favoriteProducts = favoriteProducts.filter((p: any) => p.product_id !== this.product.product_id);
      //alert('Product removed from favorites.');
    }

    this.cookieService.set('favorite_products', JSON.stringify(favoriteProducts));
  }

  getFavoriteProducts(): any[] {
    const favorites = this.cookieService.get('favorite_products');
    return favorites ? JSON.parse(favorites) : [];
  }

  checkIfFavorite() {
    if (!this.product) return;
    const favoriteProducts = this.getFavoriteProducts();
    this.isFavorite = favoriteProducts.some((p: any) => p.product_id === this.product.product_id);
  }

  viewProductDetails() {
    this.router.navigate(['/product-detail'], { queryParams: { productId: this.product.product_id } });
  }
}
