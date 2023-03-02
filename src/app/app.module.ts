import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Navbar1Component } from './header/navbar1/navbar1.component';
import { Navbar2Component } from './footer/navbar2/navbar2.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { ProductCard1Component } from './product-card1/product-card1.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCard2Component } from './product-card2/product-card2.component';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './Layouts/second-layout/second-layout.component';
import { ThirdLayoutComponent } from './Layouts/third-layout/third-layout.component';
import { FourthLayoutComponent} from './Layouts/fourth-layout/fourth-layout.component';
import { FifthLayoutComponent } from './Layouts/fifth-layout/fifth-layout.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    Navbar2Component,
    Carousel1Component,
    ProductCardComponent,
    ProductCard1Component,
    ProductCard2Component,
    HomeLayoutComponent,
    SecondLayoutComponent,
    ThirdLayoutComponent,
    FourthLayoutComponent,
    FifthLayoutComponent,
    HomebodyComponent,
    IntroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
