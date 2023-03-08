import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ProductCard1Component } from './product-card1/product-card1.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCard2Component } from './product-card2/product-card2.component';
import { HomebodyComponent } from './Components/homebody/homebody.component';
import { HbomaxComponent } from './Pages/hbomax/hbomax.component';
import { HomeComponent } from './Pages/home/home.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    ProductCardComponent,
    ProductCard1Component,
    ProductCard2Component,
    HomebodyComponent,
    HbomaxComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
