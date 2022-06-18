import { Injectable } from '@angular/core';
import { Mykitchen } from '../kitchenitems/kitchenitems';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Mykitchen[] = [];

  addToCart(product) {
    this.items.push(product);
    //console.log(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
