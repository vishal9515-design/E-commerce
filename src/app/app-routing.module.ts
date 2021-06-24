import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { EarphonesComponent } from './accessories/earphones/earphones.component';
import { ShoesComponent } from './accessories/shoes/shoes.component';
import { WatchesComponent } from './accessories/watches/watches.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  {path:'singleproduct', component:SingleproductComponent},
  {path: 'accessories', component:AccessoriesComponent, children:[
    {path:'watches', component:WatchesComponent},
    {path:'earphones', component:EarphonesComponent},
    {path:'shoes', component:ShoesComponent}
  ]},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
