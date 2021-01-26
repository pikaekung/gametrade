import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MembersRoutingModule } from './members-routing.modules';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
