import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

// Models
import { SignupWithEmail } from '../models/signup.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private firebaseAuth: AngularFireAuth
    ) { }

    public signupWithEmail(model: SignupWithEmail): Promise<void> {
        return this.firebaseAuth.createUserWithEmailAndPassword(model.email, model.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => console.log(error));
    }

    public loginWithEmail(email: string, password: string): Promise<void> {
        return this.firebaseAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => console.log(error));
    }

    public logout(): void {
        this.firebaseAuth.signOut();
    }

    public getCurrentUser(): Observable<firebase.User> {
        return this.firebaseAuth.user;
    }

}
