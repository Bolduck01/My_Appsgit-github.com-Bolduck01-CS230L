import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './Layouts/second-layout/second-layout.component';
import { ThirdLayoutComponent } from './Layouts/third-layout/third-layout.component';
import { FourthLayoutComponent} from './Layouts/fourth-layout/fourth-layout.component';
import { FifthLayoutComponent } from './Layouts/fifth-layout/fifth-layout.component';
const routes: Routes = [

{
  path: 'HomeLayout',
  component: HomeLayoutComponent 
},
{
  path: 'Sign-In',
  component: SecondLayoutComponent
},
{
  path: 'Sign-up',
  component: ThirdLayoutComponent
},
{
  path: 'About',
  component: FourthLayoutComponent
},
{
  path: 'Contact',
  component: FifthLayoutComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//create new page
//use buttons to redirct to new layouts 
//two new layout components to have some components in