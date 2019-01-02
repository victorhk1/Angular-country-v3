import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { CountrysearchPipe } from './countrysearch.pipe';
import { GovsearchPipe } from './govsearch.pipe';
import { SortContinentPipe } from './sort-continent.pipe';
import { SortpopPipe } from './sortpop.pipe';
import { ListComponent } from './list/list.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrysearchPipe,
    GovsearchPipe,
    SortContinentPipe,
    SortpopPipe,
    ListComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }