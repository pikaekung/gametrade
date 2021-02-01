import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';

// Partials
import { HeaderComponent } from './partials/header/header.component';

// Components
import { ProductsListBoxComponent } from './components/products-list-box/products-list-box.component';

// Modules

@NgModule({
    declarations: [
        HomepageComponent,
        HeaderComponent,

        ProductsListBoxComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HomepageComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
