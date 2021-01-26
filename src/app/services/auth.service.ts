import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth: AngularFireAuth
  ) { 
    
  }

  public loginWithEmail(email: string, password: string): Promise<void> {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      }).catch((error) => console.log(error)); 
  }

  public logout(): void {
    this.firebaseAuth.signOut();
  }
}
