import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/products.service';
import {MessageService} from 'primeng/api';
import {CartService} from 'src/app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [
    MessageService
  ]
})
export class ProductComponent implements OnInit {
  productId!:number ;
  product!: any;
 constructor(private route: ActivatedRoute, private productService: ProductsService, private messageService: MessageService, private cartService: CartService) {
  this.productId = Number(this.route.snapshot.paramMap.get('id'));
 }
 ngOnInit(): void {
  this.productService.getProduct(this.productId).subscribe(res => {
   this.product = res;
  });
 }
 addToCart(product: Product) {
  if (product.status !== 'Out of Stock') {
    if(product.addedToCartQuantity) {
      product.addedToCartQuantity += 1;
    }
    else {
      product.addedToCartQuantity = 1;
    }
    this.cartService.addToCart(product);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product added to cart' });
  }
}
}
