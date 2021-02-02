import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
    {
        path: 'new',
        component: AddProductComponent
    },
    {
        path: ':id',
        component: ProductDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule { }
