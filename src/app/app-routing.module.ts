// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/products/grid/all-products', pathMatch: 'full' },
  { path: 'products/grid/:category', component: ProductListComponent },
  { path: 'products/aggrid/:category', component: ProductListComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'favorites', component: FavoritesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
