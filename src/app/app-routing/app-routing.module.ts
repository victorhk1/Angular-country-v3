import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '../list/list.component';
import { CountryComponent } from '../country/country.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'country/:code', component: CountryComponent },
  { path: '',  redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
