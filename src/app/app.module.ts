import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { WatchesComponent } from './accessories/watches/watches.component';
import { EarphonesComponent } from './accessories/earphones/earphones.component';
import { ShoesComponent } from './accessories/shoes/shoes.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    CartComponent,
    SigninComponent,
    SignupComponent,
    PagenotfoundComponent,
    AccessoriesComponent,
    WatchesComponent,
    EarphonesComponent,
    ShoesComponent,
    SingleproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
