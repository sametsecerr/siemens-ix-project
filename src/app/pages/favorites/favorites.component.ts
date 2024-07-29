import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteProducts: any[] = [];

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.loadFavoriteProducts();
  }

  loadFavoriteProducts(): void {
    const favorites = this.cookieService.get('favorite_products');
    this.favoriteProducts = favorites ? JSON.parse(favorites) : [];
  }
}
