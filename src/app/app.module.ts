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
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ShowsCarouselComponent } from './Components/shows-carousel/shows-carousel.component';
import { initializeApp } from 'firebase/app';
import { FirebaseApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth/auth.component';
// import { provideDatabase,getDatabase } from '@angular/fire/database'
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
// import { AngularFireModule } from '@angular/fire/compat'; 


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
    UserInfoComponent,
    AddProductComponent,
    ShowsCarouselComponent,
    AuthComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)), provideDatabase(() => getDatabase()),
   // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
