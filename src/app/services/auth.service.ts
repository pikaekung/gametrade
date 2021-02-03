import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

// Models
import { SignupWithEmail } from '../models/signup.model';
import { SigninWithEmail } from '../models/signin.model';

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

    public loginWithEmail(model: SigninWithEmail): Promise<void> {
        return this.firebaseAuth.signInWithEmailAndPassword(model.email, model.password)
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

    public updateUserProfile(name: string): void {
        this.getCurrentUser()
            .subscribe((user) => {
                user.updateProfile({
                    displayName: name,
                });
            });
    }

}
