import { Component, OnInit } from '@angular/core';


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
        private authService: AuthService
    ) { }

    ngOnInit(): void {

    }

    public onSubmit(): void {
        this.model = {
            email: this.email,
            password: this.password
        }

        let auth = this.authService.loginWithEmail(this.model);
        console.log(auth);
    }

}
