import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Mykitchen } from '../kitchenitems/kitchenitems';
import { KitchenService } from '../kitchenitems/kitchenitems.service';

@Component({
  selector: 'app-kitchendetail',
  templateUrl: './kitchendetail.component.html',
  styleUrls: ['./kitchendetail.component.css'],
})
export class KitchendetailComponent implements OnInit {
  kitchenitems: Mykitchen;
  pgtitle: string = 'Item detail page';
  constructor(
    private route: Router,
    private aroute: ActivatedRoute,
    private cartService: CartService,
    private itemservice: KitchenService
  ) {}

  ngOnInit(): void {
    let id = +this.aroute.snapshot.paramMap.get('id');
    this.pgtitle += `:${id}`;
    this.kitchenitems = this.itemservice.getItem(id);
  }
  goback() {
    this.route.navigate(['/items1']);
  }
  addToCart(product) {
    this.route.navigate(['/cart']);
    this.cartService.addToCart(product);
    this.kitchenitems.totalprice +=
      this.kitchenitems.vegetablequantity * this.kitchenitems.vegetablecost;
    window.alert('Added item to cart');
  }
  increment() {
    this.kitchenitems.vegetablequantity += 1;
  }
  decrement() {
    this.kitchenitems.vegetablequantity -= 1;
  }
}
