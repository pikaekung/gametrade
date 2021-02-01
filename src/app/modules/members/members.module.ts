import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MembersRoutingModule } from './members-routing.modules';

// Modules
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';


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
