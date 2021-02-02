import { Injectable, NgModule } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask, BUCKET } from '@angular/fire/storage';
import firebase from 'firebase/app';

// Models
import { Product } from '../models/product.model';
@Injectable({
    providedIn: 'root',
})
export class ProductService {
    protected productDocumentKey = 'products';

    constructor(
        private firestoreService: AngularFirestore,
        private storageService: AngularFireStorage
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

    public fileRef(filePath): AngularFireStorageReference {
        return this.storageService.ref(filePath);
    }

    public fileUpload(filePath, file): AngularFireUploadTask {
        return this.storageService.upload(filePath, file);
    }

    public getProductList(): Observable<QuerySnapshot<Product>> {
        return this.firestoreService
            .collection<Product>(this.productDocumentKey, ref => ref.orderBy('createdAt', 'desc'))
            .get();
    }

    public getProductDetail(timeStamp: string): Observable<QuerySnapshot<Product>> {
        const time = firebase.firestore.Timestamp.fromMillis(+timeStamp);
        return this.firestoreService
            .collection<Product>(this.productDocumentKey, ref => ref.where('createdAt', '==', time))
            .get();
    }

}
