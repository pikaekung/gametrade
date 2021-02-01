import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
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
