import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './shared/pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'member',
    loadChildren: () => import('./modules/members/members.module').then(m => m.MembersModule)
  },
  {
    path: '**',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
