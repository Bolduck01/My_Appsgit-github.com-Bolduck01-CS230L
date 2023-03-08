import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HbomaxComponent } from './Pages/hbomax/hbomax.component';
import { HomeComponent } from './Pages/home/home.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Hbomax',
    component: HbomaxComponent
  },
  {
    path: 'Sign-In',
    component: SignInComponent
  },
  {
    path: 'Sign-Up',
    component: SignUpComponent
  },
{
  path: 'About',
  component: AboutComponent 
},
{
  path: 'Contact',
  component: ContactComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//create new page
//use buttons to redirct to new layouts 
//two new layout components to have some components in