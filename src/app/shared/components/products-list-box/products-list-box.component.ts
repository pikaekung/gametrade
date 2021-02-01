import { Component, OnInit } from '@angular/core';

// Models
import { Product } from 'src/app/models/product.model';

// Services
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-products-list-box',
    templateUrl: './products-list-box.component.html',
    styleUrls: ['./products-list-box.component.scss']
})
export class ProductsListBoxComponent implements OnInit {
    public products: Product[] = [];
    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        // this.addProduct();
        this.getProductList();
    }

    private getProductList(): void {
        this.productService
            .getProductList()
            .subscribe((querySnapshot) => {
                querySnapshot.docs.map(doc => this.products.push(doc.data()));
            });
    }

    private addProduct(): void {
        const product: Product = {
            title: 'ซื้อ !! Ps4 Pro 1TB บอร์ด 7106B !!!',
            description: 'ประกันใจ 15 วัน สิ่งที่ท่านจะได้รับต่อไปนี้',
            productTypesId: 1,
            negotiate: true,
            createdAt: new Date(),
            createdByMemberId: 1,
            acceptExchange: true
        };

        this.productService.addProduct(product);
    }

}
