import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

// Models
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class RealtimeDatabaseService {

    constructor(
        private firebaseDatabase: AngularFireDatabase
    ) { }

    /**
     * setProduct
     */
    public setProduct(): void {
        this.firebaseDatabase
            .object('products')
            .set({
                name: 'New Products2'
            });
    }

    public getItemTesting(): Observable<any> {
        let item: Observable<any>;
        item = this.firebaseDatabase.object('products').valueChanges();
        return item;
    }

    public addProduct(data: Product): boolean {
        console.log(data);
        this.firebaseDatabase
            .list<Product>('Products')
            .push(data);
        return true;
    }

    public getProductList(): Observable<Product[]> {
        const products = this.firebaseDatabase.list<Product>('Products');
        return products.valueChanges();
    }

}
