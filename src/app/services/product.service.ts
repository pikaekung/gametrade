import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, QuerySnapshot } from '@angular/fire/firestore';

// Models
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    protected productDocumentKey = 'products';
    private productCollection: AngularFirestoreCollection<Product>;

    constructor(
        private firestoreService: AngularFirestore
    ) {
        this.productCollection = this.firestoreService.collection<Product>(this.productDocumentKey);
        // this.productDocument = this.firestoreService.doc<Product>('/products');
        // const item = this.productDocument.valueChanges();

        // item.subscribe((products) => {
        //     console.log(products);
        // });
        // this.itemDoc = this.firestoreService.doc<Product>('items/1');
        // this.item = this.itemDoc.valueChanges();
    }

    public addProduct(data: Product): boolean {
        // this.productDocument.set(data);

        console.log('Add product');
        data.id = this.firestoreService.createId();
        this.productCollection
            .add(data)
            .then((value) => { })
            .catch((error) => { });

        return true;
    }

    public getProductList(): Observable<QuerySnapshot<Product>> {
        return this.productCollection.get();
        // .subscribe((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.id, ' => ', doc.data());
        //     });
        // });


    }

}
