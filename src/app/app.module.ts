import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Navbar1Component } from './header/navbar1/navbar1.component';
import { Navbar2Component } from './footer/navbar2/navbar2.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    Navbar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
