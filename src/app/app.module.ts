import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
 import { BlindComponent } from './components/blind/blind.component';
import { FormComponent } from './components/form/form.component';
import { IxModule } from '@siemens/ix-angular';
import { ToastComponent } from './components/toast/toast.component';
import { CustomToastService } from './components/toast/toast.service';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { SearchComponent } from './components/search/search.component';
import { SelectComponent } from './components/select/select.component';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
     BlindComponent,
    FormComponent,
    ToastComponent,
    FavoritesComponent,
    ProductCardComponent,
    CategoryListComponent,
    SearchComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IxModule.forRoot(),
  ],
  providers: [
    CustomToastService,
    provideClientHydration(),
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
