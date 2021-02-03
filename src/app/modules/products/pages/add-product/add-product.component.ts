import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from "@angular/router"

// Models
import { Product } from 'src/app/models/product.model';

// Services
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

    private iProduct: Product;
    public form = {
        title: 'string',
        description: 'string',
        productTypesId: 0,
        negotiate: true,
        createdByMemberId: 0,
        acceptExchange: true,
        createdAt: null,
        file: []
    };

    public uploadPercent: Observable<number>;
    public downloadURL: string[] = [];

    constructor(
        private router: Router,
        private productService: ProductService
    ) {
    }

    ngOnInit(): void {
    }

    public uploadFile(event) {
        const timestamp = +new Date();
        const file = event.target.files[0];
        const filePath = 'P' + timestamp + '_ORG';
        const fileRef = this.productService.fileRef(filePath);
        const task = this.productService.fileUpload(filePath, file);

        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges()
            .pipe(
                finalize(() => {
                    fileRef.getDownloadURL()
                        .subscribe((imageURL) => this.downloadURL.push(imageURL));
                })
            )
            .subscribe();

        // Save file path to form.
        this.form.file.push(filePath);
    }

    public onAddProduct(): void {
        this.form.createdAt = new Date();
        this.iProduct = this.form;
        const isProductAddSuccess = this.productService.addProduct(this.iProduct);
        if (isProductAddSuccess) {
            this.router.navigate(['/']);
        }
    }

}
