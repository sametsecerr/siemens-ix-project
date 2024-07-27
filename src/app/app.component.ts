import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'siemens-ix-project';
  loading = true;
  constructor(private router: Router) {}
  goToProductList() {
    this.router.navigate(['/product-list']);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  goToFavorites() {
    this.router.navigate(['/favorites']);
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
