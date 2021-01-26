import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Modules
import { MembersRoutingModule } from './members-routing.modules';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MembersRoutingModule
    ]
})
export class MembersModule { }
