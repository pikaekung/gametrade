import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';

import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    public user: firebase.User;

    // Editor variable
    public email: string;
    public displayName: string;

    public isEditorMode = false;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.getCurrentUser();
    }

    private getCurrentUser(): void {
        this.authService.getCurrentUser()
            .subscribe((user) => this.user = user);
    }

    public onUpdateProfile(): void {
        this.authService.updateUserProfile(this.displayName);
        this.isEditorMode = false;
    }

}
