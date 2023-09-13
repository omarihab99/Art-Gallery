import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('InputNumber') inputNumber!: InputNumber;
  products: Product[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.products = this.cartService.getCartItems();
  }
  // TODO: implement the subtotal updating
  getTotalPrice(){
    this.totalPrice = this.products.reduce((total, product) => total + (product.price*product.addedToCartQuantity), 0)
  }
}
