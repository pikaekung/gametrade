import { Component, OnInit } from '@angular/core';
import { SignupWithEmail } from 'src/app/models/signup.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public model: SignupWithEmail;
    public email: string;
    public password: string;

    private submitted = false;

    constructor(
        private authService: AuthService
    ) {
        console.log(this.model);
    }

    ngOnInit(): void {
    }

    public onSubmit(): void {
        this.submitted = true;

        this.model = {
            email: this.email,
            password: this.password
        };

        this.authService.signupWithEmail(this.model);
    }

}
