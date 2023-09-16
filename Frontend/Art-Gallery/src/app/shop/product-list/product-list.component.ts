import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from 'src/app/product';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { CartService } from 'src/app/cart.service';
import {Message, MessageService} from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [
    MessageService
  ]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;

  sortField: string = '';
  constructor(private productService: ProductsService, private cartService: CartService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = Object.values(res)[0];
    });
  }
  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
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

  showProduct() {
    console.log('show product');
  }
}
