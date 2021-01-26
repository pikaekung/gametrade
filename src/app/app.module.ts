import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { ProductsModule } from './modules/products/products.module';
import { MembersModule } from './modules/members/members.module';

// Third Parties
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,

        // Third Parties
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,

        // Site Modules
        ProductsModule,
        MembersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
