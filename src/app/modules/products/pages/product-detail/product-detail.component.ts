import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

// Models
import { Product } from 'src/app/models/product.model';

// Services
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
    private productTimestamp: string;
    public product: Product;
    public productFileURL: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.productTimestamp = params.get('id');
            this.getProductDetail(this.productTimestamp);
        });

    }

    private getProductDetail(timeStamp: string): void {
        this.productService
            .getProductDetail(timeStamp)
            .subscribe((querySnapshot) => {
                querySnapshot.docs.map(doc => this.product = doc.data());
                this.getProductFileURL(this.product.file);
            });
    }

    private getProductFileURL(filePath: string[]): void {
        filePath.map(file => {
            // console.log('map' + file);
            const ref = this.productService.getFile(file);
            ref.getDownloadURL()
                .subscribe(url => this.productFileURL.push(url));
            console.log(this.productFileURL);
        });

    }

}


