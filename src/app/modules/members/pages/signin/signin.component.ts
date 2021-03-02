import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from 'src/app/services/auth.service';

// Models
import { SigninWithEmail } from 'src/app/models/signin.model';


@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    public model: SigninWithEmail;
    public email: string;
    public password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    public onSubmit(): void {
        this.model = {
            email: this.email,
            password: this.password
        }

        let auth = this.authService.loginWithEmail(this.model);
        if (auth) {
            this.redirectToHome();
        }
    }

    private redirectToHome(): void {
        this.router.navigate(['/']);
    }

}
