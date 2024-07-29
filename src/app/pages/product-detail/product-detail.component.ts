import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import productsData from '../../../../public/assest/data/product-data.json';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const productId = params['productId'];
      if (!productId) {
        this.router.navigate(['/products/all-products']);
        return;
      }

      this.product = productsData.find(p => p.product_id === productId);
      if (!this.product) {
        this.router.navigate(['/products/all-products']);
      }
    });
  }
}
