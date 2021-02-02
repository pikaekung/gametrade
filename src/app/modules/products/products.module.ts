import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { ProductsRoutingModule } from './products-routing.modules';

// Pages
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
@NgModule({
  declarations: [
    ProductDetailComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
