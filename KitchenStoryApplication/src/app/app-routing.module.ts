import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdditemsComponent } from './additems/additems.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ChangepswdComponent } from './changepswd/changepswd.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { KitchendetailComponent } from './kitchendetail/kitchendetail.component';
import { KitchenitemsComponent } from './kitchenitems/kitchenitems.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'items1', component: KitchenitemsComponent },
  { path: 'items/:id', component: KitchendetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'view', component: ViewitemsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'additems', component: AdditemsComponent },
  { path: 'changepwd', component: ChangepswdComponent },
  { path: 'kitchendetail', component: KitchendetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
