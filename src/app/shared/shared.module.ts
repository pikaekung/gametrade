import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    ],
    exports: [HomepageComponent]
})
export class SharedModule { }
