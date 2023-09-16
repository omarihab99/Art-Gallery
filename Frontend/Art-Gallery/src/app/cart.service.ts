import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  constructor() { }
  addToCart(product: Product) {
    let found = this.cartItems.find(item => item.id === product.id);
    if(found) {
      return;
    }
    this.cartItems.push(product);
    this.cartCountSubject.next(this.cartCountSubject.value + 1);
  }
  get getCartNumber$() {
    return this.cartCountSubject.asObservable();
  }
  getCartItems() {
    return this.cartItems;
  }
  removeFromCart(product: Product) {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
    this.cartCountSubject.next(this.cartCountSubject.value - 1);
  }
}
