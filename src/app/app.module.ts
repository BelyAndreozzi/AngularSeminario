import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DessertListComponent } from './dessert-list/dessert-list.component';

import { FormsModule } from '@angular/forms';
import { DessertAboutComponent } from './dessert-about/dessert-about.component';
import { DessertCartComponent } from './dessert-cart/dessert-cart.component';
import { DessertHomeComponent } from './dessert-home/dessert-home.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    DessertListComponent,
    DessertAboutComponent,
    DessertCartComponent,
    DessertHomeComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
