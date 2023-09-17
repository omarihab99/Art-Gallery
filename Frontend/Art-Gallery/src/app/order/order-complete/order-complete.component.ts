import { Component , OnInit} from '@angular/core';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/order.service';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit{

  order!: Order;
  products: Product[] = [];
  constructor(private orderService: OrderService) {
  }
  ngOnInit(): void {
    this.order = this.orderService.getOrder;
    this.products = this.order.products;
  }
}
