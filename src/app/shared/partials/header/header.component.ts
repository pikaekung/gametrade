import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public user: firebase.User;
    constructor(
        private authService: AuthService
    ) {
        this.getCurrentUser();
    }

    ngOnInit(): void {
    }

    private getCurrentUser(): void {
        this.authService.getCurrentUser()
            .subscribe((user) => this.user = user);
    }

}
