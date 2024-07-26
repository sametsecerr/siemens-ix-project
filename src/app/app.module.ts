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
import { CustomToastService } from './components/toast/toast.service';  // ToastService'i import edin


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
     BlindComponent,
    FormComponent,
    ToastComponent,
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
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
