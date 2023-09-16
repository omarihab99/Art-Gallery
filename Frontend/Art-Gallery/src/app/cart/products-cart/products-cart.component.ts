import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';
import { OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { InputNumber } from 'primeng/inputnumber';
@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss']
})
export class ProductsCartComponent implements OnInit{
  products: Product[] = [];
  subTotal: number = 0;
  tax: number = 0;
  total: number=0;
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.products = this.cartService.getCartItems();
    this.calculateSubtotal();
    this.getTaxes();
    this.getTotal();
  }
  // TODO: implement the subtotal updating
  private calculateSubtotal(){
    this.subTotal = this.products.reduce((total, product) => total + (product.price*product.addedToCartQuantity), 0);
  }
  private getTaxes(){
    this.tax = this.subTotal * 0.14;
  }
  private getTotal(){
    this.total = this.subTotal + this.tax;
  }
  updateValues(newValue:number,product:Product){
    product.addedToCartQuantity = newValue;
    this.calculateSubtotal();
    this.getTaxes();
    this.getTotal();
  }
  removeFromCart(product:Product){
    product.addedToCartQuantity = 0;
    console.log('removed');
    this.calculateSubtotal();
    this.getTaxes();
    this.getTotal();
    this.cartService.removeFromCart(product);
  }


}
