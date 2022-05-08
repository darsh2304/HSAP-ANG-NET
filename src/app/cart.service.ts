import { Injectable } from '@angular/core';
import { Product } from './products';
//import { CartService } from './cart.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(private route: ActivatedRoute, private cartService:CartService) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  itemsCount()
  {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}

