import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ProductsRoutingModule } from './products-routing.modules';

// Pages
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
