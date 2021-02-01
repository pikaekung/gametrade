import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, QuerySnapshot } from '@angular/fire/firestore';
import firebase from 'firebase/app';

// Models
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    protected productDocumentKey = 'products';
    constructor(
        private firestoreService: AngularFirestore
    ) {
    }

    public addProduct(data: Product): boolean {
        this.firestoreService
            .collection<Product>(this.productDocumentKey)
            .add(data)
            .then((value) => { })
            .catch((error) => { });

        return true;
    }

    public getProductList(): Observable<QuerySnapshot<Product>> {
        return this.firestoreService
            .collection<Product>(this.productDocumentKey, ref => ref.orderBy('createdAt'))
            .get();
    }

    public getProductDetail(timeStamp: string): Observable<QuerySnapshot<Product>> {
        const time = firebase.firestore.Timestamp.fromMillis(+timeStamp);
        return this.firestoreService
            .collection<Product>(this.productDocumentKey, ref => ref.where('createdAt', '==', time))
            .get();
    }

}
