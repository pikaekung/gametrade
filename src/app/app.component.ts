import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

import { AuthService } from './services/auth.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Game Trade';
    public user: firebase.User;

    constructor(
        private authService: AuthService
    ) {
        this.getCurrentUser();
    }

    private getCurrentUser(): void {
        this.authService.getCurrentUser()
            .subscribe((user) => this.user = user);
    }

}
