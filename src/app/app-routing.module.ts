import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HbomaxComponent } from './Pages/hbomax/hbomax.component';
import { HomeComponent } from './Pages/home/home.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  {path: 'Hbomax',component: HbomaxComponent},
  {path: "admin", component: AddProductComponent},
  {path: 'Sign-In', component: SignInComponent},
  {path: 'Sign-Up',component: SignUpComponent},
{path: 'About',component: AboutComponent },
{path: 'Contact',component: ContactComponent},
{path: 'auth', component: AuthComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
