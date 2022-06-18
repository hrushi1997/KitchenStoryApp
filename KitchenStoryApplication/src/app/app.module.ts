import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { KitchenitemsComponent } from './kitchenitems/kitchenitems.component';
import { KitchendetailComponent } from './kitchendetail/kitchendetail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { AdditemsComponent } from './additems/additems.component';
import { ChangepswdComponent } from './changepswd/changepswd.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AdminComponent, LoginComponent, ContactusComponent, AboutusComponent, RegisterComponent, KitchenitemsComponent, KitchendetailComponent, CartComponent, PaymentComponent, SuccessComponent, ViewitemsComponent, AdditemsComponent, ChangepswdComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
